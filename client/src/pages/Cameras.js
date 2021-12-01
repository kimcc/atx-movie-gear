import React from 'react';
import CameraList from '../components/CameraList';


function Cameras(){

  return (
    <div className=" my-1">
       <h1 className="mx-4 my-4">Cameras</h1>
       <div>
         <div>
          <CameraList />

        </div>
      </div>
    </div>
  );
}

export default Cameras;
