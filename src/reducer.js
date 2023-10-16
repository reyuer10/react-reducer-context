export const initialState = {
  count: 0,
  isToggleOpen: false,
  LinkName: null,
  isButtonClick: false,
  todoList: [],
  isGameStart: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET_BUTTON":
      return { ...state, count: 0 };
    case "TOGGLE_BUTTON":
      return { ...state, isToggleOpen: !state.isToggleOpen };
    case "BUTTON_ICON":
      return {
        ...state,
        LinkName: action.item,
      };
    case "BUTTON_DARK_TOGGLE":
      return { ...state, isButtonClick: !state.isButtonClick };
    case "ADD_TODO":
      const todos = {
        newValue: action.value,
        id:
          state.todoList.length === 0
            ? 1
            : state.todoList[state.todoList.length - 1].id + 1,
        completed: false,
      };
      return { ...state, todoList: [...state.todoList, todos] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todos) =>
          todos.id === action.id
            ? { ...todos, completed: !todos.completed }
            : todos
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todos) => todos.id !== action.id),
      };
    case "START_GAME":
      return {
        ...state,
        isGameStart: !state.isGameStart,
      };
    default:
      return state;
  }
};
