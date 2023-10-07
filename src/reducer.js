export const initialState = {
  count: 0,
  isToggleOpen: false,
  LinkName: null,
  isButtonClick: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET_BUTTON":
      return { count: (state.count = 0) };
    case "TOGGLE_BUTTON":
      return { ...state, isToggleOpen: !state.isToggleOpen };
    case "BUTTON_ICON":
      return {
        ...state,
        LinkName: action.item,
      };
    case "BUTTON_DARK_TOGGLE":
      return { ...state, isButtonClick: !state.isButtonClick };
    default:
      return state;
  }
};
