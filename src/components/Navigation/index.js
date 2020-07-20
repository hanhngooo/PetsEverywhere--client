import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import Search from "../SearchBar/search";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import logo from "../../assets/logo2.png";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : null;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        <img src={logo} alt="logo" width="350" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "90%" }} fill>
          <Search />

          {token ? (
            <NavbarItem className="navBarItem" path="/" linkText="Home" />
          ) : null}
          {token ? (
            <NavbarItem
              className="navBarItem"
              path="/profile"
              linkText="Profile"
            />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
