import React from "react";
import "./TodoItem.css";

const TodoItem: React.FC<{ text: string; onRemoveItem: () => void }> = (
  props
) => {
  return (
    <li className="item" onClick={props.onRemoveItem}>
      {props.text}
    </li>
  );
};
export default TodoItem;
