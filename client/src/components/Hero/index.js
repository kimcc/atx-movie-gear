import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Hero() {

  return (
   <div className="hero-image">
     <div className="hero-text">
       <h2>
         Text goes here
       </h2>
       <p>
         Something else blah blah
       </p>
        <Link to="/">
          Learn more
          <span role="img" aria-label="arrow">
            <BsArrowRight />
          </span>
        </Link>
    </div>
   </div>
  );
}

export default Hero;
