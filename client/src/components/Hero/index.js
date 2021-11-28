import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Hero() {

  return (
    <div className="hero-image">
      <div className="container hero-text">
        <h2>
        New camera arrivals
        </h2>
        <p>
        Get the cinema look with great cinema cameras &mdash; at affordable prices!
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
