import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const fetchPeople = () => async (dispatch) => {
  const response = await axios.get("https://swapi.dev/api/people/");
  dispatch({ type: ActionTypes.FETCH_PEOPLES, payload: response.data });
};
