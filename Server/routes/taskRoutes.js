// routes/taskRoutes.js
const express = require("express");
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskcontroller");
// const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

// router.get("/", authenticateToken, getTasks);
// router.get("/:id", authenticateToken, getTaskById);
// router.post("/", authenticateToken, createTask);
// router.put("/:id", authenticateToken, updateTask);
// router.delete("/:id", authenticateToken, deleteTask);

module.exports = router;
