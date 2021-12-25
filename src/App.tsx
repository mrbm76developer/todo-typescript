import Todos from "./components/Todos";
import NewItem from "./components/NewItem";
import TodosConetextProvider from "./store/todo-context";

function App() {
  return (
    <TodosConetextProvider>
      <NewItem />
      <Todos />
    </TodosConetextProvider>
  );
}

export default App;
