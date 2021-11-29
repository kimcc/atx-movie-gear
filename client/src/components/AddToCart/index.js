import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';
import Cart from "../Cart";
import { useQuery } from '@apollo/client';
import {QUERY_CAMERAS} from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  ADD_TO_CART,
  UPDATE_CAMERAS
} from "../../utils/actions";

function AddToCart(input) {
    const {
        currentCamera
    } = input

    const { id } = useParams();
    const { loading } = useQuery(QUERY_CAMERAS);

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

    const [state, dispatch] = useStoreContext();

    const { cart } = state;

    const removeFromCart = () => {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: currentCamera._id
        });
      };
    return(
        <div>
        <p>
            <button onClick={addToCart}>Make a Reservation</button>
            <button
                disabled={!cart.find(p => p._id === currentCamera._id)}
                onClick={removeFromCart}
            >
                Remove from Cart
            </button>
      </p>

      {loading ? <img src={spinner} alt="loading" /> : null}
              <Cart/>
    </div>

    )
}

export default AddToCart;