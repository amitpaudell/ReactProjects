import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <div className="">
        <h1 className="text-5xl text-amber-100 text-center font-bold">Todo App</h1>
        <TodoForm></TodoForm>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo}></TodoItem>
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
