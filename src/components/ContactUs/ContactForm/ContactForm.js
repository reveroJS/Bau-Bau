import "./ContactForm.css";

const ContactForm = () => {

    return (
        <div className="contactForm">
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
    );

}

export default ContactForm;