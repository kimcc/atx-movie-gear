
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CAMERAS } from '../../utils/queries';
import AddToCart from '../AddToCart';

import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  ADD_TO_CART,
  UPDATE_CAMERAS
} from "../../utils/actions";

function CameraItemDetail(item) {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCamera, setCurrentCamera] = useState({
    "model": "myCam",
    "brand": "MyCanon",
    "key": "1",
    "image": "canon_c200.jpeg",
    "resolution": "4K",
    "price": "150",
    "description": "tHIS IS THE CAMERA YOU WANT, OKAY????",
    "lensCompatibility": "EF-Mount",
    "quantity": "2",
    "reserveDays": "",
    "_id": "2"
  });

  const { loading, data } = useQuery(QUERY_CAMERAS);

  const { cameras, cart } = state;

  const {
    image,
    brand,
    model,
    resolution,
    description,
    lensCompatibility,
    quantity,
    _id,
    price
  } = item;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem)=> cartItem._id === id);

    //if there was a match, call UPDATE with a new purchase quantity
    if(itemInCart){
      dispatch({
        type: UPDATE_CART_DAYS,
        _id: id,
        reserveDays: parseInt(itemInCart.reserveDays) + 1
      });
    }else{
      dispatch({
        type: ADD_TO_CART,
        camera: { ...currentCamera, reserveDays: 1 }
      });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentCamera._id
    });
  };

  useEffect(() => {
    if (cameras.length) {
      setCurrentCamera(cameras.find((camera) => camera._id === id));
    }else if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });
    }
  }, [cameras, data, loading, dispatch,  id]);

  return (
     <>
       {currentCamera ? (
        <div className="my-3">
         <h1 className="productTitle">{currentCamera.brand + " " + currentCamera.model}</h1>
           <Link to="/cameras">← Back to Cameras</Link>
             <div >
                <section className="flex-row">

          {/* Image Column */}
                  <div className="flex-column productImage mx-4 px-4">
                    <img src={`/images/${currentCamera.image}`}/>
                  </div>

          {/* Description Column */}
                  <div className="flex-column productDescription mx-4 px-4">

          {/* title and price  */}
                    <h2 className="productDescriptionHeading">
                      {currentCamera.brand + " " + currentCamera.model}</h2>
                        <div>
                        <h6>${currentCamera.price}/day</h6>
                        </div>

          {/* Specs List */}
                    <section className="detailsText">
                      <h4>Specs</h4>
                          <ul className="specs">

                            <li className="my-2">
                              <div className="listTitle">Resolution: </div>
                              <div className="listElement">{currentCamera.resolution}</div>
                            </li>

                            <li className="my-2">
                              <div className="listTitle">Lens Compatibility: </div>
                              <div className="listElement">{currentCamera.lensCompatibility}</div>
                            </li>


                          <span className="truncate">
                            <li className="my-2">
                              <div className="listTitle">About: </div>
                              <div className="listElement">{currentCamera.description}</div>
                            </li>
                          </span><a className="readMore" href="#">[Read more]</a>

                            <li className="my-2">
                              <div className="listTitle">In Stock: </div>
                              <div className="listElement">{currentCamera.quantity}</div>

                            </li>
                        </ul>
                      </section>
                  </div>

        {/* Add to Cart component */}
                  <div className="flex-column reservationAndCart mx-1 px-1">
                    <AddToCart currentCamera={currentCamera} />
                  </div>

               </section>
            </div>
          </div>
      ) : null}
     </>
  )
}

export default CameraItemDetail;