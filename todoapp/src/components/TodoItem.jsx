// Import the CSS module for styling the TodoItem component
import styles from "./todoItem.module.css";

// Define the TodoItem component
export default function TodoItem({ item, todos, setTodos }) {
  // Function to handle deleting a todo item
  function handleDelete(item) {
    // Remove the item from the todos array by filtering it out
    setTodos(todos.filter((t) => t !== item));
  }

  // Function to handle toggling the completion status of a todo item
  function handleClick(name) {
    // Map over the todos array and toggle the 'done' property of the matching item
    setTodos(todos.map((t) => (t.name === name ? { ...t, done: !t.done } : t)));
    // Log the current state of todos for debugging
    console.log("old", todos);
    // Log the item that was clicked for debugging
    console.log("item clicked", item);
  }

  // Determine the class name based on the 'done' status of the item
  const className = item.done ? styles.completed : "";

  // Return the JSX structure for the TodoItem component
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {/* Display the item name, and apply a class if it's completed */}
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        {/* Button to delete the item */}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            X
          </button>
        </span>
      </div>

      {/* Horizontal line to separate items visually */}
      <hr className={styles.line} />
    </div>
  );
}
