const jwt = require("jsonwebtoken");

async function authLoginUser(req, res, next) {
  const token = req.cookies.activateToken;
  
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(req.cookies.activateToken, process.env.JWT_SECRET);
    
    req.email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Token Invalid" });
  }
}

module.exports = authLoginUser;
