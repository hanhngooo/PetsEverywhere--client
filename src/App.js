import React, { useEffect } from "react";
import "./App.css";
import { Jumbotron } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";

const Home = () => (
  <Jumbotron>
    <h1>Home</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);
  // console.log(token);
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        {token ? <Route exact path="/" component={Home} /> : null}
        {token ? <Route path="/profile" component={Profile} /> : null}
        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
