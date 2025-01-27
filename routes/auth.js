const { register, login } = require("../controllers/auth");

const authRouter = require("express").Router();

authRouter.post('/register', register)
authRouter.post('/login', login)

module.exports = authRouter