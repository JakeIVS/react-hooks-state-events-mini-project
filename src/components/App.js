import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS) 
  const [catSelect, setCatSelect] = useState("All")

  function handleDelete(item) {
    setCurrentTasks(currentTasks.filter(task=>(task.text !== item)))
  }

  function handleCatChange(cat) {
    setCatSelect(cat)
  }
  
  let filteredTasks = currentTasks.filter(task=>(
    catSelect === "All" ? true : task.category === catSelect
  ))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCatChange={handleCatChange} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
