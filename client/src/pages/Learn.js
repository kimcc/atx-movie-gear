import React from 'react';
import LearnCardList from '../components/LearnCardList';

const Learn = () => {

  return (
    <>
      <div className="learn-hero-image"></div>
      <div className="container text-block-wide">
        <h1>Learn</h1>
        <p>
          Learn more about our equipment and how to use it.
        </p>
          <div>
            <LearnCardList />
          </div>
      </div>
    </>
    
  );
}

export default Learn;