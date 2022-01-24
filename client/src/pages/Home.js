import React from "react";
import HomePageCardList from "../components/HomepageCardList";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="text-block introText container">
        <h2>Who we are</h2>
        <p>
          Austin Movie Gear is a locally owned and operated rental house supporting the filmmakers of Austin, TX. We offer the best prices in town plus honest service.
        </p>
      </div>
      <div className="container">
        <HomePageCardList />
      </div>
    </>
  );
};

export default Home;
