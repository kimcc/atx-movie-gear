import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    const body = document.getElementById("body");
    setMenuOpen(!menuOpen); // Toggle menu true or false

    body.classList.toggle("fixed-body"); // Add class to fix scrolling on body
  }

  // Show the links that don't need authentication
  function showNavLinks() {
    return (
      // If menu is open, add flex-column class. Otherwise add flex-row
      <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
        <li className="mx-3">
          <NavLink exact to="/" activeClassName="active" onClick={toggleMenu} >
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/cameras" activeClassName="active" onClick={toggleMenu} >
            Cameras
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu} >
            About
          </NavLink>
        </li>
      </ul>
    )
  }

  // Show links that require authentication
  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <NavLink to="/orderHistory" activeClassName="active" onClick={toggleMenu} >
              Order History
            </NavLink>
          </li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={
              function () {
                toggleMenu();
                Auth.logout()
              } 
              }>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <Link to="/signup" onClick={toggleMenu} >
              Signup
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/login" onClick={toggleMenu} >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  // Hamburger icon
  const NavHamburger = ({ menuOpen }) => (
   <AiOutlineMenu className="nav-hamburger" style={{fill:"#ffffff"}} size={26}/>
  );

  // Navbar that will be shown on desktop
  // Hide the hamburger on desktop
  const NavBar = ({ menuOpen, setMenuOpen }) => {
    return (
      <nav className="flex-row px-2 hidden">
         <button style={{backgroundColor:"transparent", position:"absolute", top:"0", zIndex:"999"}} type="button" aria-label="Toggle mobile menu" onClick={toggleMenu} className="hidden-mobile"><NavHamburger menuOpen={menuOpen} /></button>
        <NavLink to="/" className="flex-row hidden-mobile center-logo">
          <img className="logo mx-3" src={logo} alt="logo"></img>
        </NavLink>
        <div className="flex-row space-between display-none">
            {showNavLinks()}
          <div className="flex-row nav-auth-links">
            {showNavAuth()}
          </div>
        </div>
      </nav>
    )
  }

  // Mobile menu
  const NavMobile = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className="mobile-menu">
          <div className="flex-column">
          {showNavLinks()}
          </div>

        {showNavAuth()}
        </div>
    )
  }

  return (
    <header>
     <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     {menuOpen &&
      <NavMobile />
     }
    </header>
  );
}

export default Nav;
