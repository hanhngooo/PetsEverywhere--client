import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProfileById from "./pages/ProfileById";
import PostDetail from "./pages/PostDetail";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";
import { getAllUsers } from "./store/users/actions";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);
  // console.log(token);
  useEffect(() => {
    dispatch(getUserWithStoredToken());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        {token ? <Route path="/profile" component={Profile} /> : null}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/user/:id" component={ProfileById} />
      </Switch>
      {background && <Route path="/post/:id" component={PostDetail} />}
    </div>
  );
}

export default App;
