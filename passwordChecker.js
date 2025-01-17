function PasswordValidator(password) {
    const specialChar = /[!@#$%^&*()\-_=+{}[\]|:;<>.,?\/]/;

    if (password.length < 8) {
        return false;
    }
    if (!specialChar.test(password)) {
        return false;
    }
    return true;
}

module.exports = PasswordValidator;