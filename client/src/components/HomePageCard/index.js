import React from "react";
import { Link } from "react-router-dom";

function HomePageCameraCard(item) {

  const {
    image,
    brand,
    model,
    resolution,
    description,
    _id,
    about
  } = item;

  return (


    // <div className=" cameraCard " >
        <div className=" homepageCard" id={_id}>
          <div className="container" style={{ width: '18rem' }}>
            <img alt={model}  justifyContent="center" style={{ width: '15rem' }} variant="top" src={`/images/${image}`} />
          </div>

          <div className="container">
            <h5 className="my-2 homepageProductName">{brand + " " + model}</h5>
            <br />
            {/* <div className="my-2 mx-4"> */}
              <h6>Resolution: </h6><p>{resolution}</p>
              <h6>Specs: </h6><p>{description}</p>
              <h6>About: </h6><p>{about}</p>
            {/* </div> */}
          </div>

          <div className="homepageBtn mx-4">
          <button className="featuredButton my-2">
          <Link to={`/cameras/${_id}`}>
            See Product Details</Link>
          </button>
          </div>

        </div>


  );
}

export default HomePageCameraCard;
