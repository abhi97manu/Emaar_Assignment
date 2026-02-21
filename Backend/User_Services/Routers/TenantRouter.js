const express = require(`express`);
const authLoginUser = require("../Middleware/authValidation");
const  tenantChecker  = require("../Middleware/tenantChecker");
const tenantRoleValidator = require("../Middleware/tenantRoleValidator");
const { regisUserToTenant, getUserProfileFromTenant, getUserTasks, getAllWorkFlow, createTask, changeState } = require("../Controllers/TenantController");

const TenantRouter = express.Router();

TenantRouter.get(`/userDetails`, authLoginUser, tenantChecker,getUserProfileFromTenant)

TenantRouter.post(`/register`, authLoginUser,tenantChecker, regisUserToTenant )

TenantRouter.get(`/tasks`, tenantChecker,tenantRoleValidator,getUserTasks)

TenantRouter.get(`/allworkflow`, tenantChecker,tenantRoleValidator,getAllWorkFlow)


TenantRouter.post(`/createTask`, tenantChecker,tenantRoleValidator,createTask)


TenantRouter.patch(`/changeState/:workflowId`, tenantChecker,tenantRoleValidator,changeState)



// TenantRouter.get(`/`)

module.exports = TenantRouter