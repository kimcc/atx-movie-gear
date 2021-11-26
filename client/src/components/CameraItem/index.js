import React from "react";
import { Link } from "react-router-dom";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_DAYS} from '../../utils/actions';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    brand,
    model,
    _id,
    price,
    reserveDays
  } = item;

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem)=> cartItem._id === _id);

    //if there was a match, call UPDATE with a new purchase quantity
    if(itemInCart){
      dispatch({
        type: UPDATE_CART_DAYS,
        _id: _id,
        reserveDays: parseInt(itemInCart.reserveDays) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        reserveDays: parseInt(itemInCart.reserveDays) + 1
      });
    }else{
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, reserveDays: 1 }
      });
      idbPromise('cart', 'put', { ...item, reserveDays: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={model}
          src={`/images/${image}`}
        />
        <p>{brand + " " + model}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button onClick ={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
