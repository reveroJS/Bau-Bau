import { ClockLoader, RiseLoader } from "react-spinners/";

import * as validateServices from "./validateServices";
import { db, auth } from "./firebase";


export const createFromContact = (firstName, lastName, email, mobileNumber, message, history) => {

    let firstNameToString = firstName.toString();
    let lastNameToString = lastName.toString();
    let messageToString = message.toString();

    validateServices.emailValidation(email);
   if(!validateServices.phoneValidate(mobileNumber)) {
    return alert("Not a valid Phone Number\nPhone must be: 087xxxxxxx, 088xxxxxxx, 089xxxxxxx")
   }

    return db.collection("contactTo")
        .doc()
        .set({
            firstName: firstNameToString,
            lastName: lastNameToString,
            email,
            mobileNumber,
            message: messageToString
        })
        .then(() => {

            console.log("Document successfully written!");
            history.push("/meals")
        })
        .catch((error) => {
            return alert("Error writing document: ", error.message);
        });

};

export const createOrder = (name, email, address, city, mobilePhone, match, history) => {

    const productId = match.params.productId;
    const productName = match.params.productName;
    let orderNumber = Math.floor((Math.random() * 9999) + 999);
    let user = localStorage.key(0)
    let creator;

    if (user) {
        creator = user;
    } else {
        creator = "Guest"
    }

    let nameToString = name.toString();
    let addressToString = address.toString();
    let cityToString = city.toString();

    validateServices.emailValidation(email);
    validateServices.phoneValidate(mobilePhone);

    return db.collection("inbox")
        .doc()
        .set({
            name: nameToString,
            email,
            address: addressToString,
            city: cityToString,
            mobilePhone,
            productId,
            orderNumber,
            creator,
            productName
        })
        .then(() => {
            alert(`Your order was submit\nYour order number is ${orderNumber}`)
            console.log("Document successfully written!");
            history.push("/meals")
        })

        .catch((error) => {
            return alert("Error writing document: ", error.message);
        });
};

export const login = (email, password, history) => {

    let emalToString = email.value.toString();
    let passwordToString = password.value.toString();

    auth.signInWithEmailAndPassword(emalToString, passwordToString)
        .then((userCredential) => {

            history.push("/");
        })
        .catch((error) => {
            return alert(error.message);
        });

}

export const register = (email, password, confirmPassword, history) => {

    let emalToString = email.value.toString();
    let passwordToString = password.value.toString();
    let confirmPasswordToString = confirmPassword.value.toString();

    if (passwordToString !== confirmPasswordToString && passwordToString !== "") {
        return alert("Passwords don't Match");
    }

    auth.createUserWithEmailAndPassword(emalToString, passwordToString)
        .then((userCredential) => {

            history.push("/");
        })
        .catch((error) => {
            return alert(error.message)
        });
}

export const loadingEffect = (loading, effectName) => {

    if (effectName === "ClockLoader") {
        return (
            <section>
                <h1 style={{ position: "relative" }}>LOADING...</h1>
                <ClockLoader
                    size={100}
                    color={"#F8E71C"}
                    loading={loading}
                />
            </section>
        )

    } else {

        return (
            <section>
                <h1 style={{ position: "relative" }}>LOADING...</h1>
                <RiseLoader
                    size={100}
                    color={"#F8E71C"}
                    loading={loading}
                />
            </section>
        )
    }
}
