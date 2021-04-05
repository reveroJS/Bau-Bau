import "./Register.css";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";


const Register = ({ history }) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        let [email, password, confirmPassword] = e.target
        let emalToString = email.value.toString();
        let passwordToString = password.value.toString();
        let confirmPasswordToString = confirmPassword.value.toString();

        if (passwordToString != confirmPasswordToString && passwordToString != "") {
            return alert("Passwords don't Match");
        }


        auth.createUserWithEmailAndPassword(emalToString, passwordToString)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                history.push("/");
            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ..
                return alert(error.message)
            });
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
                                {/* <input type="checkbox" onClick={checkButton} value="Show Password"></input>
                                <span>Show Details</span> */}
                            </div>
                            <div className="inputBox w50">
                                <input type="password" name="confirmPassword" required />
                                <span>Confirm Password</span>
                            </div>
                            {/* <div className="inputBox w50">
                                <input type="text" name="name" required />
                                <span>Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="address" required />
                                <span>Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="mobileNumber" required />
                                <span>Phone Number</span>
                            </div> */}
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