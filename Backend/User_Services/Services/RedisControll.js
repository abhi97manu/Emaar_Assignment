const client = require('../redis');
async function RedisCall(req, res) {
    const {name, value} = req.body;
    console.log("RedisCall", name, value);
    try{
        
      const redisRes =  await client.set(name, value,{EX : 60})
        res.status(200).send({message: "success", redisRes})
       
    
    }
    catch(err){
        console.log("Redis Client Error", err);
    }

}


module.exports  = RedisCall;

