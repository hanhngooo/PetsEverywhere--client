import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import profile from "./profile/reducer";
import home from "./home/reducer";
import postDetail from "./postDetail/reducer";
import users from "./users/reducer";
export default combineReducers({
  appState,
  user,
  profile,
  home,
  postDetail,
  users,
});
