import axios from "axios";
import { apiUrl } from "../../config/constants";

export const POSTS_BY_USERID_FETCHED = "POSTS_BY_USERID_FETCHED";

const postsByUserIdFetched = (posts) => ({
  type: POSTS_BY_USERID_FETCHED,
  payload: posts,
});

export const fetchPostByUserId = (userId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/${userId}`);
      console.log("posts by user", response.data);
      dispatch(postsByUserIdFetched(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
