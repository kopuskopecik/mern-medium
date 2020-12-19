const express = require("express")
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const validationMiddleware =  require("../middlewares/validationMiddleware")

router.post("/register", [...validationMiddleware.emailPasswordValidation], AuthController.authRegister);

router.post("/login", [...validationMiddleware.emailPasswordValidation], AuthController.authLogin);

router.get("/users", AuthController.users);



module.exports = router