import { Link } from "react-router-dom"
import ContactForm from "./ContactForm";
import "./ContactUs.css";

const ContactUs = () => {

    return (
        <section>
            <div className="conteiner">
                <div className="contactinfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src="img/location.png" alt="location.png" /></span>
                                <span>5 Carlyle Rd<br />
                                    Birmingham B16 9BH<br />
                                    England</span>
                            </li>
                            <li>
                                <span><img src="img/email.png" alt="email.png"/></span>
                                <span>lorem@ipsum.com</span>
                            </li>
                            <li>
                                <span><img src="img/call.png" alt="call.png"/></span>
                                <span>310-386-1623</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><Link to="#"><img src="img/facebook.png" alt="facebook" /></Link></li>
                        <li><Link to="#"><img src="img/instagram.png" alt="instagram" /></Link></li>
                        <li><Link to="#"><img src="img/twitter.png" alt="twitter" /></Link></li>
                        <li><Link to="#"><img src="img/pinterest.png" alt="pinterest" /></Link></li>
                        <li><Link to="#"><img src="img/linkedin.png" alt="linkedin" /></Link></li>
                    </ul>
                </div>
                <ContactForm />
            </div>
        </section>
    );

}

export default ContactUs;