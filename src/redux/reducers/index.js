import { combineReducers } from "redux";
import { peoplesReducer } from "./peoplesReducer";
const reducers = combineReducers({
  allPeople: peoplesReducer,
});
export default reducers;
