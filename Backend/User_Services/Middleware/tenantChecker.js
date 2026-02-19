const { getSelectedTenant } = require("../Controllers/UserController");
const getPrismaClientDB = require("../DB/TenantClient");

async function tenantChecker(req, res, next) {
    const tenantId = req.headers['tenant-id'];
    console.log(tenantId, "tenant id from tenant checker middleware");
    if (!tenantId) {
        return res.status(400).send({ message: "Tenant ID is required" });
    }
    const tenantUrl = await getSelectedTenant(tenantId);


    let prisma = await getPrismaClientDB(tenantUrl.url);

   
    req.prisma = prisma;

    next();

}

module.exports = tenantChecker;