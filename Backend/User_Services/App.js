const express = require('express')
const app = require('./Server.js')
const RegisterRoute = require('./Routers/Register.Router.js');
const dotenv = require('dotenv')
app.use(express.json())
dotenv.config()


const USER_SERVICE_PORT = process.env.USER_SERVICE_PORT || 4000;


app.use(`/api`, RegisterRoute)


app.listen(USER_SERVICE_PORT, ()=>{
    console.log("Connection initialised on Port : ", USER_SERVICE_PORT);
    
})