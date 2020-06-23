import { POSTS_BY_USERID_FETCHED } from "./actions";
const initialState = {
  posts: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_BY_USERID_FETCHED:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
