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
  } = item;

  return (


    // <div className=" cameraCard " >
        <div className=" homepageCard" id={_id}>
          <div className="container" style={{ width: '25rem' }}>
            <Link to={`/products/${_id}`}>
            <h4 className="my-2 homepageProductName">{brand + " " + model}</h4>

              <img alt={model}  justifyContent="center" style={{ width: '22rem' }} variant="top" src={`/images/${image}`} />
            </Link>
          </div>
          <div className="container">
              <h6>Resolution: </h6>{resolution}
              <h6>Specs: </h6>{description}
          </div>
        </div>
  );
}

export default HomePageCameraCard;
