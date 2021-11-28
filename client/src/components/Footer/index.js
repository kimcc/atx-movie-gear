import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {

  return (
    <footer className="px-4">
      <div className="flex-column container">
        {/* Top row info*/}
        <div className="flex-row space-between footer-row footer-row-top">
          <div>
            <h5>
              Austin Movie Gear
            </h5>
            <p>
              8711 Burnet Road F-73
              Austin,Tx 78757
            </p>
            <p>
              512.788.5462
            </p>
          </div>
          <div>
            <h6>
              Hours
            </h6>
            <p>
            Mon-Fri 10 AM to 4 PM, Sat-Sun 11 AM to 3 PM
            </p>
            <p>
            Other times by appointment only
            </p>
          </div>
          <div>
            <form>
              <label for="mailing-list">
                <h6>
                Sign up for our mailing list
                </h6>
              </label>
              <input type="text" id="mailing-list" name="mailing-list" placeholder="Email address"></input>
              <input type="submit" value="Sign up"></input>
            </form>
          </div>
        </div>

        {/* Bottom row info*/}
        <div className="flex-row footer-row space-between">
          <p>
          Copyright © 2021 Austin Movie Gear
          </p>
          <div className="flex-row">
            <div className="social-link">
              <Link to="/">
                <BsFacebook size={30}/>
              </Link>
            </div>
            <div className="social-link social-link-circle">
              <Link to="/">
                <BsInstagram size={20}/>
              </Link>
            </div>
            <div className="social-link social-link-circle">
              <Link to="/">
                <BsTwitter size={20}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
