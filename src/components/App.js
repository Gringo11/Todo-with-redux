import { Todo, TodoInput } from "../redux/action";
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
