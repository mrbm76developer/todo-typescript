import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import "./Todos.css";
const Todos: React.FC<{ items: Array<Todo>; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <ul className="todos">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveItem={props.onRemoveTodo}
        />
      ))}
    </ul>
  );
};
export default Todos;
