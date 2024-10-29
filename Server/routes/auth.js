const express = require("express");
const { register, login } = require("../controllers/authController");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").isLength({ min: 2 }),
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

module.exports = router;
