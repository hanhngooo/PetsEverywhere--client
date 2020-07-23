import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";

const fetchAllUsersSuccess = (users) => {
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    payload: users,
  };
};

export const getAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/users/all`);
      dispatch(fetchAllUsersSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error", error);
    }
  };
};
