function PasswordValidator(password) {
    const specialChar = /[!@#$%^&*()\-_=+{}[\]|:;<>.,?\/]/;
    const number = /[0-9]/;
    const forbiddenString = /ipl/i;

    if (minLengthValidator(password)) {
        return false;
    }
    if (specialCharValidator(password)) {
        return false;
    }
    if (!number.test(password)) {
        return false;
    }
    if (forbiddenString.test(password)) {
        return false;
    }
    return true;
}

function minLengthValidator(password) {
    return password.length < 8;
}

function specialCharValidator(password) {
    const specialChar = /[!@#$%^&*()\-_=+{}[\]|:;<>.,?\/]/;
    return !specialChar.test(password);
}


module.exports = PasswordValidator;