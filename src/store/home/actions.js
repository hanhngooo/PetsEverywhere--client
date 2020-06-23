import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_ALL_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

const fetchPostsSuccess = (posts) => ({
  type: FETCH_ALL_POSTS_SUCCESS,
  payload: posts,
});

export const fetchAllPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/posts/all`);
      console.log("all posts", response.data);
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
