import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_DAYS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    })
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) =>{
    const value = e.target.value;

    if(value === '0'){
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_DAYS,
        _id: item._id,
        reserveDays: parseInt(value)
      });

      idbPromise('cart', 'put', { ...item, reserveDays: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.reserveDays}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;