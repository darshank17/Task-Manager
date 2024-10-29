// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

connectDB();

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
