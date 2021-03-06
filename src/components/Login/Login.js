import "./Login.css"
import { Link } from "react-router-dom";

import * as productServices from "../../services/productServices";

const Login = ({ history }) => {
    
    
    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const [email, password] = e.target;
        productServices.login(email, password, history);
       
    }

    return (
        <section>
            <form onSubmit={onLoginSubmitHandler}>
                <div className="conteiner">
                    <div className="signIn">
                        <h2>Login</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" name="email" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="password" name="password" required />
                                <span>Password</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Login" />
                            </div>
                            <>
                            <span>Want to register? <Link to="/register">Click here</Link></span>
                            </>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Login;