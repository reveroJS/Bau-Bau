import "./Meals.css";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";


const Meals = () => {

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
    }, [])


    return (
        <section>
            <div className="conteiner-meals">
                {product.map((x) => <MealCard key={x.id} {...x} />)}
            </div>
        </section>
    );
}

export default Meals;