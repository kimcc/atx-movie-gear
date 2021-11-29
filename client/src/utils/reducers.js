import {
  UPDATE_CAMERAS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  CLEAR_CART,
  TOGGLE_CART,
  ADD_MULTIPLE_TO_CART
} from "./actions";

import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_CAMERAS`, return a new state object with an updated cameras array
    case UPDATE_CAMERAS:
      return {
        ...state,
        cameras: [...action.cameras],
      };

    case ADD_TO_CART:
      return{
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.camera]
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.cameras],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(camera => {
        return camera._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case UPDATE_CART_DAYS:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(camera => {
          if (action._id === camera._id) {
            camera.reserveDays = action.reserveDays;
          }
          return camera;
        })
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
      ...state,
      cartOpen: !state.cartOpen
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}