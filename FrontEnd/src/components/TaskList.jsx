import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/tasks", {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      });
      // console.log(res.data.tasks);
      setTasks(res.data.tasks || res.data);
    };
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token in headers
      },
    });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task List</h1>
        <Link
          to="/tasks/new"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New Task
        </Link>
      </div>

      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <div key={task._id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <div className="flex space-x-4 mt-2">
              <Link to={`/tasks/${task._id}`} className="text-blue-600">
                {" "}
                view{" "}
              </Link>
              <Link to={`/tasks/edit/${task._id}`} className="text-blue-600">
                Edit
              </Link>
              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
