import { FETCH_A_POST_SUCCESS } from "./actions";
import { LIKE_A_POST_SUCCESS, UNLIKE_A_POST_SUCCESS } from "../user/actions";
import { ADD_A_COMMENT } from "../home/actions";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_A_POST_SUCCESS:
      return { ...state, ...action.payload };

    case LIKE_A_POST_SUCCESS:
    case UNLIKE_A_POST_SUCCESS:
      return { ...state, ...action.payload };

    case ADD_A_COMMENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
