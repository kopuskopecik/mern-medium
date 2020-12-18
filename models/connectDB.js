require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  // promise dönecek.
  try {
     console.log(process.env.MONGODBURI)
    await mongoose.connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("succesfully connect to DB");
  } catch (error) {
    console.log("error connecting DB", error);
  }
};

module.exports = connectDB;
