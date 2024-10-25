import "./styles.css";

import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>ToDoリストアプリ</h1>
      {/* ToDoInputにhandleAddTaskを渡す */}
      <ToDoInput onAddTask={handleAddTask} />
      {/* ToDoListにtasksを渡す */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
