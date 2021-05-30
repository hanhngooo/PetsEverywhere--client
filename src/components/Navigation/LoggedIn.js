import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../store/user/actions"
import { Button, Nav } from "react-bootstrap"

import { selectUser } from "../../store/user/selectors"
import UserNameCard from "../UserNameCard/userNameCard"

export default function LoggedIn() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <>
      <Nav.Item style={{ color: "white" }}>
        <UserNameCard profile_pic={user.profile_pic} name={user.name} />
      </Nav.Item>
      <Nav.Item className="pr-1">
        <Link to="/login">
          {" "}
          <Button variant="info" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        </Link>
      </Nav.Item>
    </>
  )
}
