import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS) // COPY of TASK, NOT the ORIGINAL TASK
  const categories = CATEGORIES; // use COPY of CATEGORIES, shit won't work if you use the ORIGINAL CATEGORIES 
  const [filteredCategory, setFilteredCategory] = useState(null); // filteredCategory is by default a falsy value (more explanation in filteredTasks)

  const handleDeleteTask = (deletedTask) => { // for <TaskList>
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text); // this one is weird
    setTasks(filteredTasks); // new tasks = current tasks - deleted task
  }

  const onTaskFormSubmit = (newTask) => { // for <NewTaskForm>
    setTasks([...tasks, newTask]); // new tasks = current tasks + submitted task
  }

  const handleCategoryFilter = (category) => { // for <CategoryFilter>
    setFilteredCategory(category); // filter category based on button with that category 
  };

  let filteredTasks;
  if (filteredCategory === "All") { // When button All is clicked (filteredCategory is equal to "All")
    filteredTasks = tasks; // return all tasks without filtering
  } else if (filteredCategory) { // When a button is clicked (filteredCategory is truthy) - (truthy =/= true, truthy value has a valid value that is not a null or empty)
    filteredTasks = tasks.filter((task) => task.category === filteredCategory); // return only selected tasks
  } else { // if none of the button is clicked (default) - (falsy =/= false, falsy value has a value that is null or empty)
    filteredTasks = tasks; // then all task will show.
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} deleteThis={handleDeleteTask} />
    </div>
  );
}

export default App;