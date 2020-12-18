const User = require("../models/User");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);


  // TODO1 şifreleme
  // TODO2 Duplicate Check
  // TODO3 Validation 

  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  await user.save();

  res.send("AuthRegister");
};

exports.authLogin = (req, res) => {
  res.send("LoginRegister");
};
