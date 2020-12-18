var express = require('express');
var router = express.Router();

const AuthRouter = require("./AuthRouter");

console.log("user.js")


/* GET users listing. */
// /users/
router.use('/', AuthRouter);

//router.use('/', AuthRouter);

//router.use('/', AuthRouter);

module.exports = router;
