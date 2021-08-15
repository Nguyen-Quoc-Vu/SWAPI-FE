import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  peoples: {
    count: null,
    next: null,
    previous: null,
  },
};

export const peoplesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PEOPLES:
      return { ...state, peoples: payload };
    default:
      return state;
  }
};
