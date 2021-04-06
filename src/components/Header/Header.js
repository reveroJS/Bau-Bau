import { Link } from "react-router-dom";

import "./Header.css";
import UserAccount from "../UserAccount";

const Header = () => {
    return (
        <>
            
            <header id="header">
            <UserAccount />
                <h1>Bau Bau H<span>ome</span> D<span>elivery</span></h1>

                <Link to="/">
                    <input type="image" src="/img/vector-cartoon-cute-dogs-with-big-bone_52569-1378.jpg" name="home" alt="homeButton" width="300" height="100"></input>
                </Link>
                {/* {{#if loggedIn}} */}
                {/* <h2>Welcome <span>Email</span>!</h2> */}
                {/* {{/if}} */}
               
                <nav id="nav">
                    <ul>
                        {/* {{#if loggedIn}} */}
                        {/* <li><a href="#/logout">Sign out</a></li> */}

                        {/* {{else}} */}

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
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>

                        {/* {{/if}} */}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;


/*{ <nav className="navigation">
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
            <li><Link>Our Process</Link></li>
            <li><a>How It Works</a></li>
        </ul>
    </li>
    <li><a>My Account</a></li>
    <li><a>Sign In</a></li>
    <li><a>Sign Out</a></li>
    <li><a>Start Now</a></li>

</ul>
</nav> }*/