const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {

  
  await prisma.tasks.deleteMany()
  await prisma.workflow_Rules.deleteMany()
  await prisma.user.deleteMany()
  await prisma.role.deleteMany()
  await prisma.workflow.deleteMany()
 
  const admin = await prisma.role.create({
    data: { name: "Admin" }
  })

   const Manager = await prisma.role.create({
    data: { name: "Manager" }
  })
   const Lead = await prisma.role.create({
    data: { name: "Lead" }
  })



 
  const user1 = await prisma.user.create({
    data: {
      firstname: "Abhi",
      lastname: "Kumar",
      email: "abhi@gmail.com",
      empId: 101,
      role_id: admin.role_id
    }
  })

  const user2 = await prisma.user.create({
    data: {
      firstname: "John",
      lastname: "Doe",
      email: "john@gmail.com",
      empId: 102,
      role_id: reviewer.role_id
    }
  })


  const workflow = await prisma.workflow.create({
    data: {
      workflow_name: "Document Approval"
    }
  })


  await prisma.workflow_Rules.createMany({
    data: [
      {
        workflow_id: workflow.id,
        state_1: "Draft",
        state_2: "Review",
        role_id: Lead.role_id
      },
      {
        workflow_id: workflow.id,
        state_1: "Review",
        state_2: "Approved",
        role_id: Manager.role_id
      }
    ]
  })

 
  await prisma.tasks.createMany({
    data: [
      {
        workflow_id: workflow.id,
        state_name: "Draft",
        assigned_to: user1.empId,
        created_by: user1.empId,
        role_id: Lead.role_id
      },
      {
        workflow_id: workflow.id,
        state_name: "Review",
        assigned_to: user2.empId,
        created_by: user1.empId,
        role_id: Manager.role_id
      }
    ]
  })

  console.log(" completed")
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })