import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosConetext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import "./Todos.css";
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosConetext);
  return (
    <ul className="todos">
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveItem={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
