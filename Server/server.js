// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

// const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
// app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
