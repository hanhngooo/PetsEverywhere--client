import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_USER_BY_ID_SUCCESS = "FETCH_USER_BY_ID_SUCCESS";

const fetchUserByIdSuccess = (user) => ({
  type: FETCH_USER_BY_ID_SUCCESS,
  payload: user,
});

export const fetchUserById = (userId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/${userId}`);
      console.log("profile", response.data);
      dispatch(fetchUserByIdSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
