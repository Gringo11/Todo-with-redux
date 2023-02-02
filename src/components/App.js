import { Todo, TodoInput } from "../Actions/Action";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <Todo />
    </div>
  );
}

export default App;
