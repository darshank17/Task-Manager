const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const userId = req.user.userId;
  const tasks = await Task.find({ userId });
  res.json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.userId;

  try {
    const task = new Task({
      title,
      description,
      userId,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  const userId = req.user.userId;
  const taskId = req.params.id;

  const task = await Task.findOne({ _id: taskId, userId });
  if (!task) {
    return res.status(404).json({ msg: "Task not found or access denied" });
  }

  const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
  });
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  const userId = req.user.userId;
  const taskId = req.params.id;

  const task = await Task.findOne({ _id: taskId, userId });
  if (!task) {
    return res.status(404).json({ msg: "Task not found or access denied" });
  }

  await Task.findByIdAndDelete(taskId);
  res.json({ message: "Task deleted" });
};
