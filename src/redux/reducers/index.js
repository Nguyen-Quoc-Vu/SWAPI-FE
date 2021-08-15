import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer";
const reducers = combineReducers({
  allPeople: peopleReducer,
});
export default reducers;
