import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TasksDetails";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          {/* If logged in, show TaskList, otherwise show Register/Login */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<TaskList />} />
              <Route path="/tasks/new" element={<TaskForm />} />
              <Route path="/tasks/:id" element={<TaskDetails />} />
              <Route path="/tasks/edit/:id" element={<TaskForm />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<Register setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
