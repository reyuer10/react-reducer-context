export const initialState = {
  count: 0,
  isToggleOpen: false,
  LinkName: null,
  isButtonClick: false,
  todoList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET_BUTTON":
      return {...state, count: 0};
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
      return { ...state, todoList: [...state.todoList, action.value] };
    default:
      return state;
  }
};