import { Link } from "react-router-dom"
import "./ContactUs.css";



const ContactUs = () => {

    return (
        <div className="conteiner">
            <div className="contactinfo">
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><img src="img/location.png" /></span>
                            <span>5 Carlyle Rd<br />
                                Birmingham B16 9BH<br />
                                England</span>
                        </li>
                        <li>
                            <span><img src="img/email.png" /></span>
                            <span>lorem@ipsum.com</span>
                        </li>
                        <li>
                            <span><img src="img/call.png" /></span>
                            <span>310-386-1623</span>
                        </li>
                    </ul>
                    <ul className="sci">
                        <li><Link to="#"><img src="img/facebook.png" alt="facebook" /></Link></li>
                        <li><Link to="#"><img src="img/instagram.png" alt="instagram" /></Link></li>
                        <li><Link to="#"><img src="img/twitter.png" alt="twitter" /></Link></li>
                        <li><Link to="#"><img src="img/pinterest.png" alt="pinterest" /></Link></li>
                        <li><Link to="#"><img src="img/linkedin.png" alt="linkedin" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="contactForm">
                <h2>Send a Message</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" name="" required />
                        <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="" required />
                        <span>Last Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="" required />
                        <span>Email Address</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="" required />
                        <span>Mobile Number</span>
                    </div>
                    <div className="inputBox w100">
                        <textarea name="" required></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Send"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ContactUs;