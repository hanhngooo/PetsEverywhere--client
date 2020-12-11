import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  NEW_POST_SUCCESS,
  EDIT_PROFILE_SUCCESS,
  UPDATE_PROFILE_PIC_SUCCESS,
  LIKE_A_POST_SUCCESS,
  UNLIKE_A_POST_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  description: null,
  profile_pic: null,
  name: null,
  email: null,
  posts: [],
  likes: [],
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

    case UPDATE_PROFILE_PIC_SUCCESS:
      return { ...state, ...action.payload };

    case LIKE_A_POST_SUCCESS:
      return {
        ...state,
        likes: [
          ...state.likes,
          { userId: state.id, postId: action.payload.id },
        ],
      };
    case UNLIKE_A_POST_SUCCESS:
      return {
        ...state,
        likes: state.likes.filter((like) => like.postId !== action.payload.id),
      };

    default:
      return state;
  }
};
