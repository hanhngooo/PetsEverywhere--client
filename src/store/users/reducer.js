import { FETCH_ALL_USERS_SUCCESS } from "./actions";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
