const PasswordValidator = require('../passwordChecker');

describe('PasswordValidator', () => {
    it('should return false if password is less than 8 characters', () => {
        expect(PasswordValidator('2333')).toBe(false);
    });

    it('should return true if password is 8 characters or more', () => {
        expect(PasswordValidator('23334455_')).toBe(true);
    });

    describe('special charater check', () => { 
        it("should return false if password doesn't contain a special character", () => {
            expect(PasswordValidator('23334455nS')).toBe(false);
        });

        it('should return true if password contains a special character', () => {
            expect(PasswordValidator('23334455!')).toBe(true);
        });
    });

    describe('number check', () => {
        it('should return false if password does not contain a number', () => {
            expect(PasswordValidator('asdfghjk!')).toBe(false);
        });

        it('should return true if password contains a number', () => {
            expect(PasswordValidator('asdfghjk!1')).toBe(true);
        });
    });

    describe('forbidden string check', () => {
        it('should return false if password contains the string "ipl"', () => {
            expect(PasswordValidator('asdfghjk!1ipl')).toBe(false);
        });

        it('should return false if password contains the string "IPL"', () => {
            expect(PasswordValidator('asdfghjk!1IPL')).toBe(false);
        });

        it('should return true if password does not contain the string "ipl"', () => {
            expect(PasswordValidator('asdfghjk!1')).toBe(true);
        });
    });
});