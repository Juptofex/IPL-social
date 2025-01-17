function PasswordValidator(password) {
    if (minLengthValidator(password)) {
        return false;
    }
    if (specialCharValidator(password)) {
        return false;
    }
    if (numberValidator(password)) {
        return false;
    }
    if (forbiddenStringValidator(password)) {
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

function numberValidator(password) {
    const number = /[0-9]/;
    return !number.test(password);
}

function forbiddenStringValidator(password) {
    const forbiddenString = /ipl/i;
    return forbiddenString.test(password);
}

module.exports = PasswordValidator;