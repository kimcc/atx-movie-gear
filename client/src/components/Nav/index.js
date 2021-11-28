import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import Cart from "../Cart";

function Nav() {

  function showNavLinks() {
    return (
      <>
        <li className="mx-1">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/cameras">
            Cameras
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/about">
            About
          </Link>
        </li>
      </>
    )
  }

  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/DummyProduct">
              Dummy Product
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
         <img src={logo} alt="logo"></img>
        </Link>
      </h1>

      <nav>
        <ul className="flex-row">
          {showNavLinks()}
          {showNavAuth()}
          <Cart />
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
