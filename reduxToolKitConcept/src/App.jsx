import { useState } from "react";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
function App() {
  return (
    <>
      <AddTodo></AddTodo>
      <Todo></Todo>
    </>
  );
}

export default App;
