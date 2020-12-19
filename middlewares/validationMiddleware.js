const { body} = require('express-validator');

const checkEmail = body("email", "Please enter a valid e-mail").isEmail();
const checkPassword = body(
  "password",
  "Please enter a password with 6 and more chars"
).isLength({ min: 8 });

exports.emailPasswordValidation = [checkEmail, checkPassword];