import "./MyProfile.css";
import { Link } from "react-router-dom";

const MyProfile = (props) => {
    console.log(props)

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
                                    <p>alex@gmail.com</p>
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
                                <div className="data">
                                    <h4>Beef</h4>
                                    <h5>Order Number: 3333</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="data">
                                    <h4>Turkey</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );


}


export default MyProfile;