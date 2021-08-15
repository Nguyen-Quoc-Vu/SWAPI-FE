import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  peoples: {
    count: 1,
    next: null,
    previous: null,
    results: [],
  },
};

export const peopleReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PEOPLES:
      return { ...state, peoples: payload };
    default:
      return state;
  }
};
