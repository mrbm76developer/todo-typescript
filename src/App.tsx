import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewItem from "./components/NewItem";
import { useState } from "react";


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (textTodo: string) => {
    const newTodo = new Todo(textTodo);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler =()=>{
    
  }
  return (
    <div>
      <NewItem onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
