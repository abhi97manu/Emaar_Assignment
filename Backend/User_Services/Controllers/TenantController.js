const prisma = require('../DB/Prisma.DB')
async function TenantController(req,res){
    try{

        const data = await prisma.tenants.findMany()
      
        res.status(200).send(data)
        

    }catch(erorr)
    {
            console.log(erorr);
            
    }
}


module.exports = TenantController