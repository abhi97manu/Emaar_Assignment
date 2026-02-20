const { addWorkflowRule } = require("../Controllers/adminController");
const  tenantChecker = require( "../Middleware/tenantChecker")
const  tenantRoleValidator = require( "../Middleware/tenantRoleValidator")

const express = require(`express`);

const adminRouter = express.Router()


adminRouter.post(`/addworkflow`, tenantChecker, tenantRoleValidator,addWorkflowRule )


module.exports = adminRouter