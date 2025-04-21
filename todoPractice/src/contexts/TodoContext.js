import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      todo: 1,
      todo: "Todo msg",
      status: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
