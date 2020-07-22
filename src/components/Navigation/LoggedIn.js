import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import UserNameCard from "../UserNameCard/userNameCard";
export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Nav.Item style={{ color: "white", padding: "0rem 1rem" }}>
        <UserNameCard profile_pic={user.profile_pic} name={user.name} />
      </Nav.Item>
      <Nav.Item style={{ paddingRight: "1rem" }}>
        <Button variant="info" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </Nav.Item>
    </>
  );
}
