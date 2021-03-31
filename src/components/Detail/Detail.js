import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import RiseLoader from "react-spinners/RiseLoader";

import "./Detail.css";


const Detail = ({
    match
}) => {

    const productId = match.params.productId
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {

        db.collection('meals')
            .doc(productId)
            .get()
            .then((res) => {

                setProduct(res.data())
            })
        setTimeout(() => setLoading(false), 2000)
    }, [productId, setProduct])


    return (
        <>
            {loading === false ?
                (
                    <section>
                        <div className="card-wrapper">
                            <div className="card-details">
                                <div className="product-img">
                                    <div className="img-display">
                                        <div className="img-showcase">
                                            <img src={product.imageUrl[0]} alt="img" />
                                        </div>
                                    </div>
                                    <div className="img-select">
                                        <div className="img-item">
                                            <a href="#" data-id="1">
                                                <img src={product.imageUrl[0]} alt="img" />
                                            </a>
                                        </div>
                                        <div className="img-item">
                                            <a href="#" data-id="2">
                                                <img src={product.imageUrl[1]} alt="img" />
                                            </a>
                                        </div>
                                        <div className="img-item">
                                            <a href="#" data-id="3">
                                                <img src={product.imageUrl[2]} alt="img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h2 className="product-title">{product.name}</h2>
                                    <div className="product-price">
                                        <p className="new-price">Price: <span>${product.price}</span></p>
                                    </div>
                                    <div className="priduct-detail">
                                        <h2>About: </h2>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="purchase-info">
                                        <input type="number" min="0" value="1" />
                                        <button type="" className="btn">Add to Cart</button>
                                        <button type="" className="btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) :
                (
                    <section>
                        <h1 style={{position:"relative"}}>LOADING...</h1>
                        <RiseLoader
                            size={100}
                            color={"#F8E71C"}
                            loading={loading}
                        />
                    </section>
                )}
        </>
    );
}

export default Detail;


