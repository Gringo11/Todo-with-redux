const initialState = {
  todos: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            label: action.payload.label,
          },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default Reducer;
