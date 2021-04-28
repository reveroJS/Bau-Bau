import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import UserAccount from "../UserAccount";
import AuthContext from "../../contexts/AuthContext";


const Header = () => {
    const {isAuthenticated, email} = useContext(AuthContext);

    return (
        <>
            <header id="header">
                <h1>Bau Bau H<span>ome</span> D<span>elivery</span></h1>
                <>
                    {isAuthenticated === true ? (
                        <UserAccount email={email} />
                    ) : (false)}
                </>

                <Link to="/">
                    <input type="image" src="/img/vector-cartoon-cute-dogs-with-big-bone_52569-1378.jpg" name="home" alt="homeButton" width="300" height="100"></input>
                </Link>

                <nav id="nav">
                    <ul>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn"><Link to="/meals">Meals</Link>
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <Link to="/meals/detail/i1ccFO1zvbMvASUg5Zhw">Barkin’ Beef</Link>
                                    <Link to="/meals/detail/nMopEctzRgUYOUp6zGDC">Chompin’ Chicken</Link>
                                    <Link to="/meals/detail/gfUoRuY8EE2Dmarw0zfg">Tail Waggin’ Turkey</Link>
                                    <Link to="/meals/detail/1cEKEmQjAsAKEyWPcXRg">Lip Lickin’ Lamb</Link>
                                </div>
                            </div>
                        </li>

                        <li><Link to="/contact">Contact Us</Link></li>


                        {isAuthenticated === true ?
                            (
                                <>
                                <li><Link to="/employee/box">Inbox</Link></li>
                                    <li><Link to="/logout">Sign out</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            )}
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Header;