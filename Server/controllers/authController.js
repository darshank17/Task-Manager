const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ email, password: await bcrypt.hash(password, 10) });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_KEY, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error("Error in registration route:", err);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_KEY, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error("Error in registration route:", err);
    res.status(500).send("Server error");
  }
};
