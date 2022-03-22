import { combineReducers } from 'redux';

export const stateOfMenu = (menuState=false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return action.payload;
  }
  return menuState;
};

export default combineReducers({
  menuState: stateOfMenu
});
