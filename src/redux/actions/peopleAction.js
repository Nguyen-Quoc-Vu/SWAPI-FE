import { ActionTypes } from "../constants/actionTypes";
import { SWAPI_PEOPLE } from "../constants/api";
import axios from "axios";

export const fetchPeople = (page) => async (dispatch) => {
  const response = await axios.get(SWAPI_PEOPLE + page);
  dispatch({ type: ActionTypes.FETCH_PEOPLES, payload: response.data });
};
