import React, { useContext, useRef } from "react";
import { TodosConetext } from "../store/todo-context";
import "./NewItem.css";

const NewItem: React.FC = () => {
  const todosCtx = useContext(TodosConetext);
  const textInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="text" />
      <input id="text" type="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewItem;
