import { combineReducers } from "redux";
import taskListReducer from "./taskListReducer";

export default combineReducers({
  taskType: taskListReducer,
});
