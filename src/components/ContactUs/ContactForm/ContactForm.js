import "./ContactForm.css";
import * as productServices from "../../../services/productServices";

const ContactForm = ({ history }) => {

    const onContactSubmitHandler = (e) => {
        e.preventDefault();
        const [firstName, lastName, email, mobileNumber, message] = e.target;

        productServices.createFromContact(
            firstName.value,
            lastName.value,
            email.value,
            mobileNumber.value,
            message.value
        )
            .then(() => {

                console.log("Document successfully written!");
                history.push("/meals")
            })

            .catch((error) => {
                console.error("Error writing document: ", error);
            });


    }

    return (
        <form onSubmit={onContactSubmitHandler}>
            <div className="contactForm" >
                <h2>Send a Message</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" name="firstName" required />
                        <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="lastName" required />
                        <span>Last Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="email" required />
                        <span>Email Address</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="mobileNumber" required />
                        <span>Mobile Number</span>
                    </div>
                    <div className="inputBox w100">
                        <textarea name="message" required></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </form>
    );

}

export default ContactForm;