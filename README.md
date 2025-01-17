# IPL-social
# Authors
DAMILOT Julien - julien.damilot@student.vinci.be
# Github URL
https://github.com/Juptofex/IPL-social.git
# Summary
This project includes a password validation function and corresponding tests. The `PasswordValidator` function checks if a password meets the following criteria:
- At least 8 characters long
- Contains at least one special character
- Contains at least one number
- Does not contain the string "ipl" (case insensitive)

The project uses Jasmine for testing, with tests defined in `spec/passwordChecker.test.js`. The tests verify that the password meets the specified criteria.
# Build and test
To install the project dependencies, run the following command:
```bash
npm install
```
To test the code you just need to use 
```bash
npm run test
```