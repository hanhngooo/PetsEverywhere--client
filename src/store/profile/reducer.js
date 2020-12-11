import { FETCH_USER_BY_ID_SUCCESS } from "./actions";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
