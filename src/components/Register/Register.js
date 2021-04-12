import "./Register.css";
import { Link } from "react-router-dom";
import * as productServices from "../../services/productServices";

const Register = ({ history }) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        let [email, password, confirmPassword] = e.target
        productServices.register(email, password, confirmPassword, history)
    }

    return (
        <section>
            <form onSubmit={onRegisterSubmitHandler}>
                <div className="conteiner">
                    <div className="register">
                        <h2>Register</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" name="email" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="password" name="password" required />
                                <span>Password</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="password" name="confirmPassword" required />
                                <span>Confirm Password</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Register" />
                            </div>
                            <>
                            <p>Already a member? <Link to="/login">Login here</Link></p>
                            </>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Register;