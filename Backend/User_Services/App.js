const express = require('express')
const app = require('./Server.js')
const cors = require('cors')
const RegisterRoute = require('./Routers/Register.Router.js');
const dotenv = require('dotenv');
const socket = require('./Socket.js');

const adminlogin = require('./Controllers/adminController');
// const {TenantController} = require('./Controllers/TenantController.js');
const cookies = require('cookie-parser');
const UserRouter = require('./Routers/User.Route.js');
const TenantRouter = require('./Routers/TenantRouter.js');
const adminRouter = require('./Routers/admin.Routes.js');
const errorHandler = require('./Middleware/errorHandelr.js');
const RedisCall = require('./Services/RedisControll.js');

app.use(cors(
   { origin : "http://localhost:5173",
     credentials: true
   }
))

//Socket Connection  
socket.on('connection', (socket) => {
    console.log('A client connected:', socket.id);  });

    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
      })

app.use(express.json())

app.use(cookies())
dotenv.config()

const SERVICE_PORT = process.env.USER_SERVICE_PORT ||4000 ;


app.use('/redis', RedisCall)
// app.get(`/tenantList`, TenantController)
app.use(`/api`, RegisterRoute)

app.use(`/user`, UserRouter)
app.use(`/tenant`,TenantRouter)
app.use(`/admin`, adminRouter)

app.use(errorHandler)


app.listen(SERVICE_PORT, ()=>{
    console.log("Connection initialised on Port : ", SERVICE_PORT);
    
})