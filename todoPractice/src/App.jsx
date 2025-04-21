import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="">
      <h1 className="text-5xl text-amber-100 text-center font-bold">Todo App</h1>
      <TodoForm></TodoForm>
      <TodoItem></TodoItem>
    </div>
  );
}

export default App;
