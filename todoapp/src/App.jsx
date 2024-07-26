import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />

      {/* <InlineComponent />
      <OutlineComponent /> */}
    </div>
  );
}

export default App;
