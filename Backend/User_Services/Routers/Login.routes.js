const express = require(`express`)
const {userLogin, getUserProfile} = require(`../Controllers/UserController`);
const authLoginUser = require("../Middleware/authValidation");
const LoginRouter = express.Router();



LoginRouter.post(`/login`,  userLogin)

LoginRouter.get(`/userProfile`,authLoginUser, getUserProfile)

module.exports = LoginRouter


