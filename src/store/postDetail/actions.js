import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

// Fetch one post
export const FETCH_A_POST_SUCCESS = "FETCH_A_POST_SUCCESS";

const fetchAPostSuccess = (post) => ({
  type: FETCH_A_POST_SUCCESS,
  payload: post,
});

export const fetchAPost = (id) => {
  return async (dispatch, getState) => {
    // dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/post/${id}`);
      console.log("fetched Post", response.data);
      dispatch(fetchAPostSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error", error);
    }
  };
};
