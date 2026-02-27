const jwt = require("jsonwebtoken");

async function regisUserToTenant(req, res) {
  const prisma = req.prisma;

  const { firstname, lastname, empId, email } = req.body;
  const empid = Number(empId);

  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        empId: empid,
        email,
      },
    });
    console.log("created :",user);
    res.status(200).send({ message: "User registered successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: `Error registering user: ${err}` });
  }
}

async function getUserProfileFromTenant(req, res) {
  const tenatId = req.headers["tenant-id"];
  const prisma = req.prisma;
  const email = req.email;

  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      res.status(204).send({ message: "Not Belong to this tenant" });
    } else {
      const setTenantCookie = jwt.sign(
        { role_id: user.role_id, empId: user.empId },
        process.env.TENANT_JWT_SECRET,
        { expiresIn: "1h" },
      );

      res.cookie(`tenantToken${tenatId}`, setTenantCookie, {
        httpOnly: true,
        secure: true,
      });
      res.status(200).send({ ...user, show: true });
    }
  } catch (err) {
    res.status(500).send({ message: `Error fetching user profile` });
    console.log("Error fetching user profile: ", err);
  }
}

async function getUserTasks(req, res) {
  const prisma = req.prisma;
  
  const empId = req.empId;
  console.log(empId, "emp id from tenant controller");
  try {
    const tasks = await prisma.tasks.findMany({
      where: { assigned_to: empId },
    });

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: `Error fetching tasks: ${err}` });
  }
}

async function getAllWorkFlow(req, res) {
  const prisma = req.prisma;

  try {
    const workslows = await prisma.workflow.findMany();

    if (!workslows) return res.status(204).send({ message: "no Workflows" });

    res.status(200).send(workslows);
  } catch (err) {
    res.status(500).send({ message: "Error while geting workflows" });
  }
}

async function createTask(req, res) {
  const prisma = req.prisma;
  const empId = req.empId;
  const workflow_id = req.body;

  try {
    const flow_data = await prisma.Workflow_Rules.findFirst({
      where: {
        AND: [{ workflow_id: workflow_id.id }, { state_1: "Draft" }],
      },
      select: {
        role_id: true,
        state_1: true,
      },
    });

    const response = await prisma.tasks.create({
      data: {
        role: { connect: { role_id: flow_data.role_id } },
        state_name: flow_data.state_1,
        workflow: { connect: { id: workflow_id.id } },
        created_by: empId,
        user: { connect: { empId: empId } },
      },
    });

    if (response) res.status(200).send({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "failed" });
  }
}

async function changeState(req, res) {
  const prisma = req.prisma;
  const workflow_id = req.params.workflowId;
  const { state, taskId } = req.query;
  console.log("task",taskId)
  try {
    await prisma.$transaction(async (tx) => {
      const { state_2: nextState, role_id: nextroleId } =
        await tx.Workflow_Rules.findFirst({
          where: {
            AND: [
              {
                workflow_id: Number(workflow_id),
              },
              {
                state_1: state,
              },
            ],
          },
        });
      const { empId: nextEmpId } = await tx.user.findFirst({
        where: {
          role_id: Number(nextroleId),
        },
      });
console.log("nextState", nextState, "nextroleId", nextroleId, "nextEmpId", nextEmpId);
      const {task_id}  = await tx.tasks.findFirst({
        where: {
          AND: [
            { task_id: Number(taskId) },
            { workflow_id: Number(workflow_id) },
            { state_name: state },
          ],
        },
        select :{
          task_id : true
        }
      });

      await tx.tasks.update({
        where: {
          task_id: task_id,
        },
        data: {
          state_name: nextState,
          role_id: Number(nextroleId),
          assigned_to: Number(nextEmpId),
        },
      });
    });

    res.status(200).send({ message: "State Updated" });
  } catch (err) {
    res.status(500).send({ message: "Internal Error whiel Transiting state" });
    console.log("Internal Error whiel Transiting state", err);
  }
}

module.exports = {
  regisUserToTenant,
  getUserProfileFromTenant,
  getUserTasks,
  getAllWorkFlow,
  createTask,
  changeState,
};
