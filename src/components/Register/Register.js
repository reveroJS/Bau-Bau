import "./Register.css";

const Register = () => {

    return (
        <section>
        <div className="conteiner">
            <div className="register">
                <h2>Register</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" name="email" required />
                        <span>Email</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="password" required />
                        <span>Password</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="password" required />
                        <span>Repet Password</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="password" required />
                        <span>Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="password" required />
                        <span>Address</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="password" required />
                        <span>Phone Number</span>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Register" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );




}

export default Register;