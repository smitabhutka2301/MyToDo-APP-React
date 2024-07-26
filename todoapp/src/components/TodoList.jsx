// Import the TodoItem component and CSS module for styling
import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

// Define the TodoList component
export default function TodoList({ todos, setTodos }) {
  // Create a sorted copy of the todos list, sorting by completion status
  // The 'slice()' method creates a shallow copy of the array
  // The 'sort()' method sorts items; converting 'done' to Number (0 for false, 1 for true)
  const sortedList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  // Return the JSX structure for the TodoList component
  return (
    <div className={styles.list}>
      {/* Map over the sorted list of todos to render each TodoItem component */}
      {sortedList.map((item) => (
        <TodoItem
          key={item.name} // Unique key based on the item's name
          item={item} // Pass the current todo item as a prop
          todos={todos} // Pass the full list of todos as a prop
          setTodos={setTodos} // Pass the function to update the todos as a prop
        />
        // The unique key is necessary to help React identify which items have changed,
        // are added, or are removed, enhancing performance and providing stability in lists.
      ))}
    </div>
  );
}
