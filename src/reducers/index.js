import { combineReducers } from 'redux';

export const stateOfMenu = (isOpen=false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return action.payload;
  }
  return isOpen;
};

export default combineReducers({
  isOpen: stateOfMenu
});
