import "./SignIn.css"

const SignIn = () => {

    return (
        <section>
            <div className="conteiner">
                <div className="signIn">
                    <h2>Sign In</h2>
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
                            <input type="submit" value="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SignIn;