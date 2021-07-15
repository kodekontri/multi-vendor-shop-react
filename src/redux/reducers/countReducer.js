import { INCREMENT, DECREMENT } from "../actions/counter/types";

const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

export default reducer;
