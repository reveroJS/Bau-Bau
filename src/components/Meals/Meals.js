import "./Meals.css";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import MealCard from "./MealCard";


const Meals = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        db.collection('meals')
            .get()
            .then((res) => {
                let meals = []
                res.forEach((doc) => {
                    let data = doc.data()
                    meals.push(data)
                })
                setProduct(meals)
            })
        setTimeout(() => setLoading(false), 2000)
    }, [])


    return (
        <>
            {loading === false ?
                (
                    <section>
                        <div className="conteiner-meals">
                            {product.map((x) => <MealCard key={x.id} {...x} />)}
                        </div>
                    </section>
                ) : (
                    <section>
                        <h1 style={{ position: "relative" }}>LOADING...</h1>
                        <ClimbingBoxLoader
                            size={60}
                            color={"#F8E71C"}
                            loading={loading}
                        />
                    </section>
                )}
        </>
    );
}

export default Meals;