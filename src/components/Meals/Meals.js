import "./Meals.css";
import { db, auth } from "../../services/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productServices from "../../services/productServices";
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
                console.log(meals)
                setProduct(meals)
            })
    }, [])


    return (
        <section>
            <div className="conteiner-meals">
                <>
                    {product.map((x) => <MealCard key={x.id} {...x} />)}
                    {/* {console.log({product})}   */}
                    {/* {product.forEach((x) => <MealCard key={x.id} {...x} />)} */}
                </>
                {/* <div className="card">
                    <div className="imgBox">
                        <img src="/beef/beef1.jpg" alt="beef" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Barkin' Beef</h2>   
                            <p>Our high-protein, grain-free beef recipe beats the competition by leaps and bounds. Perfectly crafted by our chefs to be...grain-free beef recipe beats the competition by leaps and bounds.grain-free beef recipe beats the competition by leaps and bounds.</p>
                            <Link className="buyButton" to="/">See More</Link>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card">
                    <div className="imgBox">
                        <img src="/chicken/chicken1.jpg" alt="chiken.png" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Chompin Chicken</h2>
                            <p>Finally, a high-protein, low-fat chicken dish fit for our furry friends! Grain-free and packed with whole food ingredients to...</p>
                            <Link className="buyButton" to="/">See More</Link>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card">
                    <div className="imgBox">
                        <img src="/lamb/lamb1.jpg" alt="beef" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Tail Waggin’ Turkey</h2>
                            <p>Put some pep in their step with our high-protein turkey recipe. Made with lean protein, fresh veggies, and healthy grains, this meal is perfect for...</p>
                            <Link className="buyButton" to="/">See More</Link>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card">
                    <div className="imgBox">
                        <img src="/turkey/turkey1.jpg" alt="turkey" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Lip Lickin’ Lamb</h2>
                            <p>Delicious, nutritious, and gentle as a lamb, this meal is perfect for pups that struggle with food sensitivities. Crafted with quinoa, an ancient grain...</p>
                            <Link className="buyButton" to="/">See More</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Meals;