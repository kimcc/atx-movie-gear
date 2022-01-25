import React from "react";
import { BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {

  return (
    <footer className="px-4">
      <div className="flex-column container footerWrapper">
        {/* Top row info*/}
        <div className="flex-row space-between footer-row footer-row-top">
          <div>
            <h5>
              Austin Movie Gear
            </h5>
            <p>
              8711 Burnet Road F-73
              Austin, TX 78757
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
            Mon-Fri 10 AM to 4 PM,
            Sat-Sun 11 AM to 3 PM
            </p>
            <p>
            Other times by appointment only
            </p>
          </div>
          <div>
            <form className="flex-column">
              {/* <div> */}
                <label htmlFor="mailing-list">
                <h6>
                Sign up for our mailing list
                </h6>
              </label>
              {/* </div> */}
              <div>
              <input type="text" id="mailing-list" name="mailing-list" placeholder="Email address"></input>
              <input className="mailing-list-btn" type="submit" value="Sign up"></input>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom row info*/}
        <div className="flex-row footer-row space-between">
          <p>
          Copyright © 2021 Austin Movie Gear
          </p>
          <div className="flex-row">
            <div className="social-link social-link-circle">
              <a href="https://www.instagram.com/austinmoviegear" target="_blank" rel="noreferrer noopener">
                <BsInstagram size={18}/>
              </a>
            </div>
            <div className="social-link social-link-circle">
              <a href="https://www.youtube.com/channel/UC-Z0emm3kROvxj7byrIvDCw" target="_blank" rel="noreferrer noopener">
                <BsYoutube size={20}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
