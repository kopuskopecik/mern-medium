const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const checkFunction = require("../helpers/checkFunction");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO3 Validation
  checkFunction(req, res);
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  // TODO1 şifreleme
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  //console.log(hashedpassword);

  // TODO2 Duplicate Check
  const checkeduser = await User.findOne({ email }).exec();

  console.log(checkeduser);

  if (checkeduser) {
    // TODO Redirect to Login Page

    return res.status(400).json({
      errors: [{ message: "User already exists" }],
    });

    //return res.redirect('/to');
  }

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedpassword,
  });
  await user.save();

  res.send("AuthRegister");
};

exports.authLogin = (req, res) => {



  res.send("LoginRegister");
};

exports.users = async (req, res) => {
  console.log("haydaaaa");
  users = await User.find({});

  if (User.length > 0) {
    console.log("Users are listed seccuesfully");
    res.send(users);
  }
};
