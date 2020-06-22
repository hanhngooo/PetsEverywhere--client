import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const NEW_POST_SUCCESS = "NEW_POST_SUCCESS";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      console.log("response after login,", response.data);
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      // console.log("response", response.data);
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const postSuccess = (newPost) => ({
  type: NEW_POST_SUCCESS,
  payload: newPost,
});

export const uploadNewPost = (imageURL, caption) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      const response = await axios.post(
        `${apiUrl}/posts/uploadFile`,
        {
          imageURL,
          caption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("responsed data", response.data);

      dispatch(showMessageWithTimeout("success", false, "Updated new post"));
      dispatch(postSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const editProfileSuccess = (user) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: user,
});

export const editProfile = (name, description) => {
  return async (dispatch, getState) => {
    try {
      const { token, id } = selectUser(getState());
      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/${id}`,
        {
          name,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, "edit successfull", 3000)
      );
      dispatch(editProfileSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error", error);
    }
  };
};
