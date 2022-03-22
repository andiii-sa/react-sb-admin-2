import { combineReducers } from "redux";
import menuOpenReducer from "./menu";

export default combineReducers({
  menuState: menuOpenReducer,
});
