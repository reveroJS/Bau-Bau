import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
    return (
        <nav className="navigation">
            <h1>Bau Bau</h1>
            <text>Home Delivery</text>
            
            <div className="navigation_container">
            <button className="button-conteiner" type="button" name="myButton" formtarget="_self">Bau Bau</button>
            </div>

            <ul>
                <li>
                    <button>Meals</button>
                    <ul role="menu">
                        <li><a>Barkin' Beef</a></li>
                        <li><a>Chompin' Chiken</a></li>
                        <li><a>Tail Waggin' Turkey</a></li>
                        <li><a>Lip Lickin' Lamb</a></li>
                    </ul>
                </li>
                <li><a>Treats</a></li>
                <li>
                    <button>About</button>
                    <ul>
                        <li><a>Our Process</a></li>
                        <li><a>How It Works</a></li>
                        <li><a>Reviews</a></li>
                    </ul>
                </li>
                <li><a>Get $60</a></li>
                <li><a>My Account</a></li>
                <li><a>Sign In</a></li>
                <li><a>Sign Out</a></li>
                <li><a>Start Now</a></li>
                
            </ul>
        </nav>
    );
}

export default Header;