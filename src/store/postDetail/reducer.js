import { FETCH_A_POST_SUCCESS } from "./actions";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_A_POST_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
