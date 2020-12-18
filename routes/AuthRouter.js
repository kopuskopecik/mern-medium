const express = require("express")
const router = express.Router();

const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.authRegister);

router.post("/login", AuthController.authLogin);

router.get("/users", AuthController.users);



module.exports = router