const express = require(`express`);
const authLoginUser = require("../Middleware/authValidation");
const  tenantChecker  = require("../Middleware/tenantChecker");
const tenantRoleValidator = require("../Middleware/tenantRoleValidator");
const { regisUserToTenant, getUserProfileFromTenant, getUserTasks } = require("../Controllers/TenantController");

const TenantRouter = express.Router();

TenantRouter.get(`/userDetails`, authLoginUser, tenantChecker,getUserProfileFromTenant)

TenantRouter.post(`/regisUserInTenant`, authLoginUser,tenantChecker, regisUserToTenant )

TenantRouter.get(`/tasks`, tenantChecker,tenantRoleValidator,getUserTasks)

// TenantRouter.get(`/`)

module.exports = TenantRouter