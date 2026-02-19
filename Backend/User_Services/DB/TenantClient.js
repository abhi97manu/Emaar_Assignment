const {
  PrismaClient,
} = require("../Company_db_prisma/generated/prisma/client");

const getPrismaClientDB = (() => {
  const prismaCache = new Map();
  return function (tenantURL) {
    if (prismaCache.has(tenantURL)) {

      return prismaCache.get(tenantURL);
    } else {
     
      let prisma = new PrismaClient({
        datasources: {
          db: {
            url: tenantURL,
          },
        },
      });
       
      
      prismaCache.set(tenantURL, prisma);

     
     return prisma;
    }
    
  };

})();

module.exports = getPrismaClientDB;
