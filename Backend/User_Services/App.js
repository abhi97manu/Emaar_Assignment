const app = require('./Server.js')
const dotenv = require('dotenv')

dotenv.config()


const USER_SERVICE_PORT = process.env.USER_SERVICE_PORT || 4000;




app.listen(USER_SERVICE_PORT, ()=>{
    console.log("Connection initialised on Port : ", USER_SERVICE_PORT);
    
})