const prisma = require("../DB/Prisma.DB");
const bcrypt = require(`bcrypt`)

async function userLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { email: email } });

    

    if (user) {
        const decoded = await bcrypt.compare(password, user.password);
        if(decoded)
            console.log("Role : ", user.role);
    } 
    else{
        console.log(user, " not found");
        
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = userLogin;
