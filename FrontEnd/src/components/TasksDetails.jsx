import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:5000/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      });
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl">{task.title}</h2>
        <p>{task.description}</p>
        <div className="mt-4">
          <Link to="/" className="text-blue-500">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
