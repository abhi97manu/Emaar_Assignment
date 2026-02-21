const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  
  await prisma.user.deleteMany()
  await prisma.tenants.deleteMany()

 
  const tenant1 = await prisma.tenants.create({
    data: {
      tenant_id: 1,
      name: "Company A",
      url: "postgresql://postgres:password@1K@localhost:5432/companyDB?schema=public"
    }
  })

  const tenant2 = await prisma.tenants.create({
    data: {
      tenant_id: 2,
      name: "Company B",
      url: "postgresql://postgres:password@1K@localhost:5432/CompanyBDB?schema=public"
    }
  })

  
  await prisma.user.create({
    data: {
      firstname: "Abhi",
      lastname: "Kumar",
      email: "abhi@test.com",
      password: "pass",
      tenants: {
        connect: [{ tenant_id: tenant1.tenant_id }, { tenant_id: tenant2.tenant_id }]
      }
    }
  })

  await prisma.user.create({
    data: {
      firstname: "John",
      lastname: "Doe",
      email: "john@test.com",
      password: "password",
      tenants: {
        connect: [{ tenant_id: tenant1.tenant_id }]
      }
    }
  })

  console.log("Seed done")
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })