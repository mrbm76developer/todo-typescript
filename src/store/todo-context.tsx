import React, { useState } from "react";
import Todo from "../models/todo";

type todosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosConetext = React.createContext<todosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosConetextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHndler = (textTodo: string) => {
    const newTodo = new Todo(textTodo);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  const centextValue: todosContextObj = {
    items: todos,
    addTodo: addTodoHndler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosConetext.Provider value={centextValue}>
      {props.children}
    </TodosConetext.Provider>
  );
};
export default TodosConetextProvider;
