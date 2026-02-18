const express = require(`express`)
const userLogin = require(`../Controllers/UserController`)
const UserRouter = express.Router();



UserRouter.post(`/login`,  userLogin)

module.exports = UserRouter