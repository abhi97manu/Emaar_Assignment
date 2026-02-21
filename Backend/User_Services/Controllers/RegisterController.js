const prisma = require("../DB/Prisma.DB");
const bcrypt = require("bcrypt");

async function RegisterUser(req, res) {
  const { firstname, lastname, email, password, company } = req.body;

  const hashPass = await bcrypt.hash(password, 10);
 

  try {
     await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashPass,
        tenant_id: company,
      },
    });

    res.status(201).send({ message: "User Created Sucessfully" });
  } catch (error) {
    res.status(500).send({ message: "User Creation Error" });
  } finally {
    await prisma.$disconnect();
  }
}

async function getTenants(req, res) {
  try {
    const data = await prisma.tenants.findMany({
      select : {
        name :true,
        tenant_id:true
      }
    });

    res.status(200).send(data);
  } catch (erorr) {
    res.status(500).send({message : "Error getting Tenants"})
    console.log(erorr);
  }
}

module.exports = { RegisterUser, getTenants };
