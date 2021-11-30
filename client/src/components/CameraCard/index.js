import React from "react";
import { Link } from "react-router-dom";

function CameraCard(item) {

  const {
    image,
    brand,
    model,
    resolution,
    description,
    _id,
    price
  } = item;

  return (

    <div className="flex-row space-between">
    <section className="flex-column productCard" id={_id}>
        <div className="card border-box" style={{ width: '18rem' }}>
          <div className="container">
            <img alt={model} className=" my-2" justifyContent="center" style={{ width: '14rem' }} variant="top" src={`/images/${image}`} />
          </div>
          <div>
            <h6 className="my-2">{brand + " " + model}</h6>
            <div className="my-2 mx-4">
              <p>{resolution}</p>
              {description}
            </div>
            <button className="my-2">
            <Link to={`/cameras/${_id}`}>
              See Product Details</Link>
            </button>
            <footer className="cardFooter" id="price">
              <div className="cardFooter hardText">Rentals beginning at</div>
              <div className="rentalPrice">${price}/day</div>
            </footer>
          </div>
        </div>
      </section>
  </div>
  );
}

export default CameraCard;
