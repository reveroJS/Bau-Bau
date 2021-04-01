
export const emailValidation = (email) => {

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm;

    if(email.match(emailRegex)) {
        return true;

    } else {

        throw new Error("Invalid Email")
    }
}

export const phoneValidate = (inputtxt) => {

    var phoneno = /08[789]\d{7}/;
    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {
        throw new Error("Not a valid Phone Number\nPhone must be: 087xxxxxxx, 088xxxxxxx, 089xxxxxxx")
    }
}