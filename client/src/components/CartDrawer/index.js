import React from "react";
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import Auth from '../../utils/auth';
import { BsXLg } from "react-icons/bs";

function CartDrawer(props) {

  const [state, dispatch]= useStoreContext();

  return (
    <div>
      <div className="flex-row space-between">
        <h2>Shopping Cart</h2>
        <div className="close" onClick={() => props.toggleCart()}>
          <BsXLg />
        </div>
      </div>
     
      {state.cart.length ?(
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong> Total: ${() => props.calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button onClick={() => props.submitCheckout()}>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ):(
        <h6>
          You haven't added anything to your cart yet!
        </h6>
      )}
    </div>
  );
}

export default CartDrawer;
