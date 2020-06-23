import { FETCH_ALL_POSTS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
