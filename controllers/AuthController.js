const User = require("../models/User");
var bcrypt = require('bcryptjs');



exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

   // TODO1 şifreleme
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  //console.log(hashedpassword);


  

 
  
  // TODO3 Validation 

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
  console.log("haydaaaa")
  users = await User.find({})

  if (User.length > 0){
    console.log("Users are listed seccuesfully");
    res.send(users);
  }
}
