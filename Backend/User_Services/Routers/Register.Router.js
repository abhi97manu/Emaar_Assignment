const express = require('express')
//const prisma = require('../DB/Prisma.DB')
const {RegisterUser,getTenants} = require('../Controllers/RegisterController')


const RegisterRoute = express.Router()


RegisterRoute.post(`/register`, RegisterUser)
RegisterRoute.get(`/tenantList`,getTenants)


// RegisterRoute.post(`/register_admin`,async(req, res)=>{
//          const { firstname, lastname, email, password, empId } = req.body;
//     await prisma.admin.create({
//         data: {
//             firstname : firstname,
//             lastname :lastname,
//             email : email,
//             password : password,
//             empId: empId,
            
//         }
//     })
// })



module.exports = RegisterRoute