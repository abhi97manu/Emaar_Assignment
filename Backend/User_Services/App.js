const express = require('express')
const app = require('./Server.js')
const cors = require('cors')
const RegisterRoute = require('./Routers/Register.Router.js');
const dotenv = require('dotenv');
const LoginRouter = require('./Routers/Login.routes.js');
const adminlogin = require('./Controllers/adminController');
const TenantController = require('./Controllers/TenantController.js');




app.use(express.json())
app.use(cors())
dotenv.config()

const SERVICE_PORT = process.env.USER_SERVICE_PORT ||4000 ;

app.get(`/tenantList`, TenantController)
app.use(`/api`, RegisterRoute)

app.use(`/user`, LoginRouter)
app.use(`/adminlogin`, adminlogin)


app.listen(SERVICE_PORT, ()=>{
    console.log("Connection initialised on Port : ", SERVICE_PORT);
    
})