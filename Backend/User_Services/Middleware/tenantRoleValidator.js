const jwt = require("jsonwebtoken");

 function tenantRoleValidator(req, res, next) {
    const tenatnID = req.headers['tenant-id'];
  
    const tenantToken = req.cookies[`tenantToken${tenatnID}`];

    if (!tenantToken) {
        return res.status(401).send({ message: "Unauthorized: No tenant token provided" });
    }
    try {
        const decoded =  jwt.verify(tenantToken, process.env.TENANT_JWT_SECRET);
        console.log("emp"  , decoded.empId);
        req.empId = decoded.empId;
        
        next();
    } catch (err) {
        return res.status(401).send({ message: "Unauthorized: Invalid tenant token" });
    }
}

module.exports = tenantRoleValidator;