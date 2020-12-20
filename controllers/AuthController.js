const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

const User = require("../models/User");
const checkFunction = require("../helpers/checkFunction");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO3 Validation
  checkFunction(req, res);

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

exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  checkFunction(req, res);

  const checkeduser = await User.findOne({ email }).exec();
  if (!checkeduser) {
    return res.status(400).json({
      errors: [{ message: "User doesn't exist!" }],
    });
  }

  const isPassword = await bcrypt.compare(password, checkeduser.password);

  if (!isPassword) {
    return res.status(400).json({
      errors: [{ message: "Invalid credentials!" }],
    });
  }

  // Token

  jwt.sign(
    { checkeduser },
    process.env.SECRET_KEY,
    { expiresIn: 3600 },
    (err, token) => {
      console.log(err);
      console.log(token);
      if (err) {
        return res.status(400).json({
          errors: [{ message: "Invalid credentials!" }],
        });
      }
      console.log("HEADERRRRRR", req);
      res.status(202).json({ token });
    }
  );
};

exports.users = async (req, res) => {
  users = await User.find({});

  if (User.length > 0) {
    console.log("Users are listed seccuesfully");
    res.send(users);
  }
};
