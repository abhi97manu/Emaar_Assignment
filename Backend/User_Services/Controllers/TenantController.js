const jwt = require("jsonwebtoken");

async function regisUserToTenant(req, res) {
  const prisma = req.prisma;

  const {firstname, lastname,empId,email} = req.body
  const empid = Number(empId)
  
  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        empId : empid,
        email,
      },
    });
    console.log(user);
    res.status(200).send({ message: "User registered successfully", user });
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: `Error registering user: ${err}` });
  }
}

async function getUserProfileFromTenant(req, res) {
    const tenatId = req.headers['tenant-id'];
  const prisma = req.prisma;
  const email = req.email;
 
  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
     console.log(user, "email from tenant controller");

    if(!user)
    {
      res.status(204).send({message: "no user"});
    }
    else{
const setTenantCookie = jwt.sign(
      { role_id: user.role_id,
        empId: user.empId
       },
      process.env.TENANT_JWT_SECRET,
      { expiresIn: "1h" },
    );
   
    res.cookie(`tenantToken${tenatId}`, setTenantCookie, { httpOnly: true, secure: true });
    res.status(200).send({...user,show:true});
    }
    
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

async function getAllWorkFlow(req,res){
   const prisma = req.prisma;
   const empId = req.empId;
   try{
    const workslows = await prisma.workflow.findMany(  )

    if(!workslows)
    res.status(204).send({message : "no Workflows"})

    res.status(200).send(workslows)
   }
   catch(err)
   {
    res.status(500).send({message : "Error while geting workflows"})
   }

}


async function createTask(req,res){
     const prisma = req.prisma;
   const empId = req.empId;
   const workflow_id = req.body
   console.log("data : ",req.body)
   try{
      const flow_data = await prisma.Workflow_Rules.findFirst({
        where :{
          AND : [
            {workflow_id : workflow_id.id},
            {state_1 : "Draft"}
          
          ]

        },
        select : {
          role_id:true,
          state_1:true
        }
      })

console.log("data : ",flow_data)
      const response = await prisma.tasks.create({
        data:{
          role_id: flow_data.role_id,
          state_name : flow_data.state_1,
          workflow_id : workflow_id.id,
          created_by : empId,
          assigned_to : empId,



        }
      })
      console.log("res : ",response)
        if(response)
      res.status(200).send({message: "success"})

   }
   catch(err)
   {
    console.log(err)
    res.status(500).send(err)
   }
}

module.exports = { regisUserToTenant, getUserProfileFromTenant, getUserTasks,getAllWorkFlow ,createTask};