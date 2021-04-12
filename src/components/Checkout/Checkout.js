
import "./Checkout.css";
import * as productServices from "../../services/productServices";


const Checkout = ({
    match,
    history
}) => {
    
    const onOrderSubmitHandler = (e) => {
        e.preventDefault();

        const [name, email, address, city, mobilePhone] = e.target;
 
        productServices.createOrder(
            name.value,
            email.value,
            address.value,
            city.value,
            mobilePhone.value,
            match,
            history
            )
    }

    return (
        <section>
            <form onSubmit={onOrderSubmitHandler}>
                <div className="conteiner">
                    <div className="register">
                        <h2>Place my order</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" name="name" required />
                                <span>Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="email" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="address" required />
                                <span>Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="city" required />
                                <span>City</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" name="mobilePhone" required />
                                <span>Phone Number</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Checkout" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Checkout;