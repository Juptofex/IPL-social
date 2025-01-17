function PasswordValidator(password) {
    const specialChar = /[!@#$%^&*()\-_=+{}[\]|:;<>.,?\/]/;
    const number = /[0-9]/;

    if (password.length < 8) {
        return false;
    }
    if (!specialChar.test(password)) {
        return false;
    }
    if (!number.test(password)) {
        return false;
    }
    return true;
}

module.exports = PasswordValidator;