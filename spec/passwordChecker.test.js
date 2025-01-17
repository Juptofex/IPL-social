const PasswordValidator = require('../passwordChecker');

describe('PasswordValidator', () => {
    it('should return false if password is less than 8 characters', () => {
        expect(PasswordValidator('2333')).toBe(false);
    });

    it('should return true if password is 8 characters or more', () => {
        expect(PasswordValidator('23334455')).toBe(true);
    });
});