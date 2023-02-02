import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import but from "../image/Union.png";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const RemoveTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }

  return (
    <ul className="output-text">
      {todos.map((todo) => (
        <div className="wrapper">
          <li key={todo.id} className="input-text">
            {todo.label}
          </li>
          <button
            className="delete-button"
            onClick={() => {
              RemoveTodo(todo.id);
            }}
          >
            {" "}
            <img src={but} />
          </button>
        </div>
      ))}
    </ul>
  );
};

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setNewTodo("");
  };

  return (
    <div className="main">
      <input
        className="board"
        value={newTodo}
        onChange={handleChange}
        type="text"
      ></input>
      <button className="button" onClick={handleClick}>
        ADD TODO
      </button>
    </div>
  );
};
