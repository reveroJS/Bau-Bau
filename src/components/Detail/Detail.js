import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";

import * as productServices from "../../services/productServices";
import { db } from "../../services/firebase";
import "./Detail.css";
import PageNotFound from "../404";

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
    console.log(product)

    return (
        <>
            {loading === false ?
                (
                    <>
                        {product.length > 0 ? (
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
                                                    <Link to="#" data-id="1">
                                                        <img src={product.imageUrl[0]} alt="img" />
                                                    </Link>
                                                </div>
                                                <div className="img-item">
                                                    <Link to="#" data-id="2">
                                                        <img src={product.imageUrl[1]} alt="img" />
                                                    </Link>
                                                </div>
                                                <div className="img-item">
                                                    <Link to="#" data-id="3">
                                                        <img src={product.imageUrl[2]} alt="img" />
                                                    </Link>
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
                                                {/* <input type="number" min="0" value="1"/>
                                        <Link to="#" className="btn">Add to my Bowl</Link> */}
                                                <Link to={`/meals/detail/${product.id}/${product.name}/checkout`} className="btn">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            < PageNotFound />
                        )}
                    </>
                ) : (
                    productServices.loadingEffect(loading, "RiseLoader")
                )}
        </>
    );
}
export default Detail;


