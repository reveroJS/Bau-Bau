import * as validateServices from "./validateServices";
import { db } from "./firebase";


export const createFromContact = (firstName, lastName, email, mobileNumber, message) => {

    let firstNameToString = firstName.toString();
    let lastNameToString = lastName.toString();
    let messageToString = message.toString();

    validateServices.emailValidation(email);
    validateServices.phoneValidate(mobileNumber);

    return db.collection("contactTo")
    .doc()
    .set({
        firstName: firstNameToString,
        lastName: lastNameToString,
        email,
        mobileNumber,
        message: messageToString
    })
        
};

export const createOrder = (name, email, address, city, mobilePhone, orderId, orderNumber) => {

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
        orderId,
        orderNumber
    })
        
};





