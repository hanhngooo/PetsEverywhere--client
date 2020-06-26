import {
  FETCH_ALL_POSTS_SUCCESS,
  ADD_A_COMMENT,
  DELETE_A_POST,
} from "./actions";
import { LIKE_A_POST_SUCCESS, UNLIKE_A_POST_SUCCESS } from "../user/actions";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload };

    case LIKE_A_POST_SUCCESS:
    case UNLIKE_A_POST_SUCCESS:
      let index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[index] = action.payload;
      return { ...state, ...(state.posts[index] = action.payload) };
    case ADD_A_COMMENT:
      let i = state.posts.findIndex((post) => post.id === action.payload.id);
      state.posts[i] = action.payload;
      return {
        ...state,
        posts: [...state.posts, (state.posts[i] = action.payload)],
      };

    case DELETE_A_POST:
      index = state.posts.findIndex((post) => post.id === action.payload);
      state.posts.splice(index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};
