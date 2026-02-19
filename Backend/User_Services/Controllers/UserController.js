const prisma = require("../DB/Prisma.DB");
const bcrypt = require(`bcrypt`);


const jwt = require("jsonwebtoken");
const getPrismaClient = require("../DB/TenantClient");

// Any user can access it, to use this service

async function userLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { email: email } });

    if (user) {
      const decoded = await bcrypt.compare(password, user.password);
      if (decoded) {
        const setCookies = jwt.sign(
          { email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
        );
      
        res.status(200).cookie("activateToken", setCookies).send({ message: "Login successful" });
      }
    } else {
      res.status(403).send({ message: "Forbidden" });
    }
  } catch (err) {
    res.status(500).send({ message: `Error : ${err}` });
  }
}


//Get user profile details, 
async function getUserProfile(req, res) {
  const email = req.email;
  try {
    const userProfile = await prisma.user.findFirst({
      where: { email: email },
    });
    res.status(200).send(userProfile );
  } catch (err) {
    res.status(500).send({ message: `Error : ${err}` });
  }
}

async function registerUserToTenant(req, res) {}


async function getSelectedTenant(tenantid) {
    const tenantId = Number(tenantid)
   try{
    const tenantUrl = await prisma.tenants.findFirst({
        where : {tenant_id : tenantId}
    })

   return tenantUrl
   }
   catch(err)
   {
    return err
   }

}

module.exports = { userLogin, getUserProfile, registerUserToTenant, getSelectedTenant };
