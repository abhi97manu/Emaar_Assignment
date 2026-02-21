const { getSelectedTenant } = require("../Controllers/UserController");
const getPrismaClientDB = require("../DB/TenantClient");

async function tenantChecker(req, res, next) {
  const tenantId = req.headers["tenant-id"];
  console.log(tenantId)
  if (!tenantId) {
    return res.status(400).send({ message: "Do not belong to any Tenant" });
  }
  try{
  const tenantUrl = await getSelectedTenant(tenantId);
  

  let prisma = await getPrismaClientDB(tenantUrl.url);
 // if(!prisma) return

  req.prisma = prisma;
 
  next();
  }
  catch(err)

  {
    console.log("Error in tenant Checker", err)
  }
}

module.exports = tenantChecker;
