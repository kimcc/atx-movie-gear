import React from 'react';
import LearnCardList from '../components/LearnCardList';

const Learn = () => {

  return (
    <div className="container my-1">
      <h1 className="my-4">Learn</h1>
        <div>
          <LearnCardList />
        </div>
    </div>
  );
}

export default Learn;