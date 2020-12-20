var express = require('express');
var router = express.Router();

const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");


console.log("user.js")


/* GET users listing. */
// /users/
router.use('/', AuthRouter);

router.use("/profile", ProfileRouter);

//router.use('/', AuthRouter);

//router.use('/', AuthRouter);

module.exports = router;
