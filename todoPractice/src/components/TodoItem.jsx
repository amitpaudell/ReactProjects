import { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div className="flex flex-col justify-center mt-7">
      <div className="flex justify-center ">
        <input className="bg-[#246EB9] h-12 w-[50%] rounded-lg text-white" type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />
        <div className="flex flex-row">
          <button
            onClick={() => {
              if (isTodoEditable) {
                editTodo();
              } else {
                setIsTodoEditable((prev) => !prev);
              }
            }}
            className="bg-[#374151] text-amber-50 w-25 rounded-lg cursor-pointer"
          >
            {isTodoEditable ? "Save" : "Edit"}
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="bg-[#374151] text-amber-50 w-25 rounded-lg cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
