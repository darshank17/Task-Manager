import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TasksDetails";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />}></Route>
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
