import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import Logout from "./Logout";
const TaskList = ({ setIsLoggedIn }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
          d,
        },
      });

      setTasks(res.data.tasks || res.data);
    };
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="mt-8 w-1/2">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 ">
          <SiTicktick className="text-4xl text-purple-600" />
          <h1 className="text-4xl font-bold text-purple-600">Task List</h1>
        </div>
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
            <div className=" flex gap-3">
              <CiCircleCheck className="text-3xl" />
              <h2 className="text-2xl font-semibold">{task.title}</h2>
            </div>

            <div className="flex space-x-4 mt-2 ml-10">
              <Link to={`/tasks/${task._id}`} className="text-green-600">
                {" "}
                View The Task{" "}
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
      <Logout setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default TaskList;
