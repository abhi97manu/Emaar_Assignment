
const {PrismaClient} =  require('../Service_db_prisma/generated/prisma/client')

const prisma = new PrismaClient()


module.exports = prisma
