import React from 'react';
import LensList from '../components/LensList';


function Lenses(){

  return (
    <div className=" my-1">
      <h1 className="mx-4 my-4">Lenses</h1>
      <div>
        <div>
          <LensList />
        </div>
      </div>
    </div>
  );
}

export default Lenses;
