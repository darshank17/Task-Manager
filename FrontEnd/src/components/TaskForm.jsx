import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        const response = await axios.get(`http://localhost:5000/tasks/${id}`);
        setTask(response.data.tasks);
      };
      fetchTask();
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/tasks/${id}`, task);
    } else {
      await axios.post("http://localhost:5000/tasks", task);
    }
    navigate("/");
  };
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Edit task" : "Add Task"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {id ? "Update task" : "Add task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
