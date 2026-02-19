const jwt = require("jsonwebtoken");

async function regisUserToTenant(req, res) {
  const prisma = req.prisma;
  const { firstname, lastname, empId, email } = req.body;
  //      const result = await prisma.$queryRaw`SELECT column_name
  // FROM information_schema.columns where table_name = 'User'`;
  // console.log(result);
  console.log(req.body);
  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        empId,
        email,
      },
    });
    res.status(200).send({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).send({ message: `Error registering user: ${err}` });
  }
}

async function getUserProfileFromTenant(req, res) {
    const tenatId = req.headers['tenant-id'];
  const prisma = req.prisma;
  const email = req.email;
  console.log(email, "email from tenant controller");
  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    const setTenantCookie = jwt.sign(
      { empId: user.empId },
      process.env.TENANT_JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie(`tenantToken${tenatId}`, setTenantCookie, { httpOnly: true, secure: true });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: `Error fetching user profile: ${err}` });
  }
}


async function getUserTasks(req, res) {
    const prisma = req.prisma;
    const empId = req.empId;
    console.log(empId, "emp id from tenant controller");
    try {
      const tasks = await prisma.tasks.findMany({
        where: { created_by: empId },
      });

      res.status(200).send(tasks);
    } catch (err) { 
        res.status(500).send({ message: `Error fetching tasks: ${err}` });  
    }
}

module.exports = { regisUserToTenant, getUserProfileFromTenant, getUserTasks };