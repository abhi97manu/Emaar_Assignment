
const prisma = require("../DB/Prisma.DB");
const bcrypt = require ('bcrypt')


async function RegisterUser(req, res) {
  const { firstname, lastname, email, password, empId, company } = req.body;
 
  
 
  const hashPass = await bcrypt.hash(password, 10)
 console.log(hashPass);
 
  
  try {
    const user = await prisma.user.create({
        data : {
            firstname : firstname,
            lastname :lastname,
            email : email,
            password : hashPass,
            company: company

        }
    });

    res.status(201).send({message : "User Created Sucessfully"})

  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = RegisterUser;
