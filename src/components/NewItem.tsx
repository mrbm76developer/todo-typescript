import React, { useRef } from "react";
import "./NewItem.css";

const NewItem:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if(enteredText.trim().length === 0){
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="text" />
      <input id="text" type="text" ref={textInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};
export default NewItem;
