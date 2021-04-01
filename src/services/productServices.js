import * as validateServices from "./validateServices";
import { db } from "./firebase";


export const createFromContact = (firstName, lastName, email, mobileNumber, message) => {

    let firstNameToString = firstName.toString();
    let lastNameToString = lastName.toString();
    let messageToString = message.toString();

    validateServices.emailValidation(email);
    validateServices.phoneValidate(mobileNumber);

    return db.collection("inbox")
    .doc()
    .set({
        firstName: firstNameToString,
        lastName: lastNameToString,
        email,
        mobileNumber,
        message: messageToString
    })
        
};






