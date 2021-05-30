import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectToken } from "../../store/user/selectors"
import Search from "../SearchBar/search"
import NavbarItem from "./NavbarItem"
import LoggedIn from "./LoggedIn"
import logo from "../../assets/logo2.png"

export default function Navigation() {
  const token = useSelector(selectToken)

  const loginLogoutControls = token ? <LoggedIn /> : null

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="justify-content-between mb-2"
    >
      <Navbar.Brand as={NavLink} to="/" className=" m-0">
        <img src={logo} alt="logo" style={{ maxWidth: "14rem" }} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div>{token && <Search />}</div>
        </Nav>

        <Nav className="ml-auto">
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
  )
}
