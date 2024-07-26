import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault(); //event method which wont refresh your page on click
    // setTodos([todo]); // nothing will haple even if array is set
    //also need to store previous values from array

    if (todo.name.trim()) {
      setTodos([...todos, todo]);
    }
    setTodo({ name: "", done: false });

    console.log("Form", todos);

    console.log("Form submitted:", todo.name);
    console.log("Updated todos:", todos);
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.mordernInput}
            placeholder="Enter your details..."
            // onChange={(e) => setTodo(e.target.value)}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
          />
          <button className={styles.mordernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
