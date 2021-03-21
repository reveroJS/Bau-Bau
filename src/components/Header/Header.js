
import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <h1>Bau Bau H<span>ome</span> D<span>elivery</span></h1>
    
            {/* {{#if loggedIn}} */}
            <input type="image" src="img/vector-cartoon-cute-dogs-with-big-bone_52569-1378.jpg" name="home" alt="Submit" width="300" height="100"></input>
            {/* <h2>Welcome <span>Email</span>!</h2> */}
            {/* {{/if}} */} 
            <nav id="nav">
                <ul>
                    {/* {{#if loggedIn}} */}
                    {/* <li><a href="#/logout">Sign out</a></li> */}
    
                    {/* {{else}} */}
                    <li><a href="/home">Meals</a></li>
                    <li><a href="/home">About Us</a></li>
                    <li><a href="/login">Sign In</a></li>
                    <li><a href="/register">Start Now</a></li>

                    {/* {{/if}} */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;


{/* <nav className="navigation">
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
</nav> */}