import React from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Cart from "../Cart";

function Nav() {

  function showNavLinks() {
    return (
      <ul className="flex-row">
        <li className="mx-3">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/cameras" activeClassName="active">
            Cameras
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    )
  }

  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li className="mx-3">
            <NavLink to="/orderHistory" activeClassName="active">
              Order History
            </NavLink>
          </li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-3">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <nav className="flex-row px-2">

        <NavLink to="/">
          <img className="logo mx-3" src={logo} alt="logo"></img>
        </NavLink>
        <div className="flex-row space-between">
            {showNavLinks()}
          <div className="flex-row">
            {showNavAuth()}
            <Cart />
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Nav;
