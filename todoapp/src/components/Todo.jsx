// Import necessary hooks and components
import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

// Define the main Todo component
export default function Todo() {
  // Declare state variables
  // 'todos' holds the list of to-do items, and 'setTodos' is the function to update this list
  const [todos, setTodos] = useState([]);

  // Calculate the number of completed tasks by filtering the 'todos' array
  const completedTask = todos.filter((t) => t.done).length;

  // Get the total number of tasks
  const totalTask = todos.length;

  // Log the number of completed tasks to the console (useful for debugging)
  console.log(completedTask);

  // Return the JSX structure for the Todo component
  return (
    <div>
      {/* Render the Form component, passing 'todos' and 'setTodos' as props */}
      <Form todos={todos} setTodos={setTodos} />

      {/* Render the TodoList component, passing 'todos' and 'setTodos' as props */}
      <TodoList todos={todos} setTodos={setTodos} />

      {/* Render the Footer component, passing the number of completed and total tasks */}
      <Footer cmptedTask={completedTask} totalTask={totalTask} />

      {/* Optionally, render the number of completed tasks in a centered heading */}
      {/* <h1 align="center">{completedTask}</h1> */}

      {/* Optionally, log the current list of todos to the console (useful for debugging) */}
      {/* {console.log(todos)} */}
    </div>
  );
}
