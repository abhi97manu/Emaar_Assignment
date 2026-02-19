const express = require(`express`)
const {userLogin, getUserProfile, getSelectedTenant} = require(`../Controllers/UserController`);
const authLoginUser = require("../Middleware/authValidation");
const UserRouter = express.Router();



UserRouter.post(`/login`,  userLogin)

UserRouter.get(`/userProfile`,authLoginUser, getUserProfile)


module.exports = UserRouter