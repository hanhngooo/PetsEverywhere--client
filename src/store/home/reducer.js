import { FETCH_ALL_POSTS_SUCCESS } from "./actions";
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
        (post) => post.id === action.payload.postId
      );
      state.posts[index] = action.payload;
      return { ...state };
    default:
      return state;
  }
};
