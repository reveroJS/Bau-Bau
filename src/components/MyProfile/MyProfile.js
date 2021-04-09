import "./MyProfile.css";
import { Link } from "react-router-dom";
import MyOrders from "./MyOrders";

import { db } from "../../services/firebase";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";


const MyProfile = (props) => {

    let userEmail = localStorage.key(0);

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection('inbox')
            .get()
            .then((res) => {
                let orders = []
                
                res.forEach((doc) => {
                    
                    let data = doc.data()
                    if(userEmail == data.creator){
                        orders.push(data)
                    }
                    
                })
                setOrders(orders)
                console.log(orders[0].creator)
            })
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <section>
            <div className="myProfile">
                <div className="wrapper-profile">
                    <div className="left">
                        <img src="/userImg/hurby.jpg" alt="myPicture" width="158" />
                        <h2>User Name</h2>
                        <ul className="sci">
                            <li><Link to="#"><img src="img/facebook.png" alt="facebook" /></Link></li>
                            <li><Link to="#"><img src="img/instagram.png" alt="instagram" /></Link></li>
                            <li><Link to="#"><img src="img/twitter.png" alt="twitter" /></Link></li>
                            <li><Link to="#"><img src="img/pinterest.png" alt="pinterest" /></Link></li>
                            <li><Link to="#"><img src="img/linkedin.png" alt="linkedin" /></Link></li>
                        </ul>
                    </div>
                    <div className="right">

                        <div className="info">
                            <h3>Information</h3>
                            <div className="info_data">
                                <div className="data">
                                    <h4>Email</h4>
                                    <p>{userEmail}</p>
                                </div>
                                <div className="data">
                                    <h4>Phone</h4>
                                    <p>08778022545</p>
                                </div>
                            </div>
                        </div>

                        <div className="orders">
                            <h3>My Orders</h3>
                            <div className="orders_data">
                               {orders.map((x) => <MyOrders key={x.id} {...x} />)} 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );


}


export default MyProfile;