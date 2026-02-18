const express = require(`express`)
const userLogin = require(`../Controllers/UserController`)
const LoginRouter = express.Router();



LoginRouter.post(`/login`,  userLogin)

module.exports = LoginRouter


