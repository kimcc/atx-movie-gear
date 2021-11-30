import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CameraItemDetail from '../components/CameraItemDetail';

import { QUERY_CAMERAS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  ADD_TO_CART,
  UPDATE_CAMERAS
} from "../utils/actions";
import Cart from '../components/Cart';
import { idbPromise } from "../utils/helpers";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCamera, setCurrentCamera] = useState({
});

  const { loading, data } = useQuery(QUERY_CAMERAS);

  const { cameras, cart } = state;

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
      idbPromise('cart', 'put', {
        ...itemInCart,
        reserveDays: parseInt(itemInCart.reserveDays) + 1
      });
    }else{
      dispatch({
        type: ADD_TO_CART,
        camera: { ...currentCamera, reserveDays: 1 }
      });
      idbPromise('cart', 'put', { ...currentCamera, reserveDays: 1  });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentCamera._id
    });

    idbPromise('cart', 'delete', { ...currentCamera});
  };

  useEffect(() => {
    if (cameras.length) {
      setCurrentCamera(cameras.find((camera) => camera._id === id));
    }else if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });
      data.cameras.forEach((camera) =>{
        idbPromise('cameras', 'put', camera);
      });
    }
  }, [cameras, data, loading, dispatch,  id]);

  return (
    <>
      {currentCamera ? (
        <div className="container space-between">
          <CameraItemDetail
            // _id={currentCamera._id}
            // key={currentCamera.key}
            // image={currentCamera.image}
            // model={currentCamera.model}
            // brand={currentCamera.brand}
            // resolution={currentCamera.resolution}
            // price={currentCamera.price}
            // reserveDays={currentCamera.reserveDays}
            />

          {/* <p>
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find(p => p._id === currentCamera._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p> */}


        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}

export default Detail;