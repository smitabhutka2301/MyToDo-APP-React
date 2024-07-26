// Import the CSS module for styling the header component
import styles from "./header.module.css";

// Define the Header component
export default function Header() {
  // Return the JSX for the header, applying the styles from the CSS module
  return (
    <div className={styles.header}>
      {/* The text content of the header */}
      My To Do
    </div>
  );
}
