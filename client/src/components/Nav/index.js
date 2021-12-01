import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  function showNavLinks() {
    return (
      // If menu is open, add flex-column class. Otherwise add flex-row
      <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
        <li className="mx-3">
          <NavLink exact to="/" activeClassName="active" onClick={() => setMenuOpen(!menuOpen)} >
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/cameras" activeClassName="active" onClick={() => setMenuOpen(!menuOpen)} >
            Cameras
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(!menuOpen)} >
            About
          </NavLink>
        </li>
      </ul>
    )
  }

  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <NavLink to="/orderHistory" activeClassName="active" onClick={() => setMenuOpen(!menuOpen)} >
              Order History
            </NavLink>
          </li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={
              function () {
                setMenuOpen(!menuOpen)
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
            <Link to="/signup" onClick={() => setMenuOpen(!menuOpen)} >
              Signup
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/login" onClick={() => setMenuOpen(!menuOpen)} >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  const NavHamburger = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 18 18" fill="#ffffff" width="32px">
      <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  // Navbar that will be shown on desktop
  // Hide the hamburger on desktop
  const NavBar = ({ menuOpen, setMenuOpen }) => {
    return (
      <nav className="flex-row px-2 hidden">
         <button style={{backgroundColor:"transparent", position:"absolute", top:"0", zIndex:"999"}} type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="hidden-mobile"><NavHamburger menuOpen={menuOpen} /></button>
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
        <div className="mobile-menu" style={{position:"absolute", top:"0", zIndex:"99", height:"100vh"}}>
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
      <NavMobile>

      </NavMobile>
     }
    </header>
  );
}

export default Nav;
