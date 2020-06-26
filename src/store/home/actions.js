import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../../store/user/selectors";
import {
  // appLoading,
  appDoneLoading,
  // showMessageWithTimeout,
  // setMessage,
} from "../appState/actions";
export const FETCH_ALL_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const ADD_A_COMMENT = "ADD_A_COMMENT";
export const DELETE_A_POST = "DELETE_A_POST";
const fetchPostsSuccess = (posts) => ({
  type: FETCH_ALL_POSTS_SUCCESS,
  payload: posts,
});

export const fetchAllPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/posts/all`);
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
// Fetch one post
export const FETCH_A_POST_SUCCESS = "FETCH_A_POST_SUCCESS";

const fetchAPostSuccess = (post) => ({
  type: FETCH_A_POST_SUCCESS,
  payload: post,
});

export const fetchAPost = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/posts/${id}`);
      dispatch(fetchAPostSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
// Add new comment
export const addCommentSuccess = (comment) => ({
  type: ADD_A_COMMENT,
  payload: comment,
});

export const addNewComment = (content, postId) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());

      const response = await axios.post(
        `${apiUrl}/post/${postId}/comment`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("post after add comment", response.data);
      dispatch(addCommentSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error", error);
    }
  };
};

// delete a post
const deletePostSuccess = (postId) => ({
  type: DELETE_A_POST,
  payload: postId,
});

export const deletePost = (postId) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());

      const response = await axios.delete(`${apiUrl}/posts/${postId}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("post deleted", response.data);
      dispatch(deletePostSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error", error);
    }
  };
};
