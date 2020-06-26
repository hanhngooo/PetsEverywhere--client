import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import MiniProfilePic from "../PersonalCard/miniProfilePic";
export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <CardColumns className="mt-2">
        <Nav.Item>
          <MiniProfilePic profile_pic={user.profile_pic} />
        </Nav.Item>
        <Nav.Item style={{ color: "white" }}>{user.name}</Nav.Item>
      </CardColumns>
      <Button variant="info" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
