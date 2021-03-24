import "./Login.css"

const Login = () => {

    return (
        <section>
            <div className="conteiner">
                <div className="signIn">
                    <h2>Login</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="email" required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="password" required />
                            <span>Password</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Login;