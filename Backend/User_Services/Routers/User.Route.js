const express = require(`express`)
const {userLogin, getUserProfile, getSelectedTenant, userLogout} = require(`../Controllers/UserController`);
const authLoginUser = require("../Middleware/authValidation");
const UserRouter = express.Router();



UserRouter.post(`/login`,  userLogin)
UserRouter.post(`/logout`,authLoginUser,userLogout)

UserRouter.get(`/userProfile`,authLoginUser, getUserProfile)


module.exports = UserRouter