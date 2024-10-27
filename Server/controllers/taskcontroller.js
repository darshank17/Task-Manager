// const task = require("../models/task");
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.status(200).json(task);
};

const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  console.log(req.body);
  await newTask.save();
  res.status(201).json(newTask);
};

const updateTask = async (req, res) => {
  const updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedtask) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(updatedtask);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
