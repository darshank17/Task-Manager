const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Access denied" });

  try {
    const verified = jwt.verify(token, JWT_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
};

module.exports = authenticateToken;
