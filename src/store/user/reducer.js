import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  NEW_POST_SUCCESS,
  EDIT_PROFILE_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  description: null,
  name: null,
  email: null,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case NEW_POST_SUCCESS:
      return { ...state, posts: [action.payload, ...state.posts] };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
