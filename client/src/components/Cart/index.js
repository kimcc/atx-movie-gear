import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import { useLazyQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState'
import { TOGGLE_CART} from '../../utils/actions';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch]= useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);


  function toggleCart(){
    dispatch({ type: TOGGLE_CART});
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.reserveDays;
    });
    return sum.toFixed(2);
  }

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data]);

  function submitCheckout(){
    const productIds = [];

    getCheckout({
      variables: { cameras: productIds }
    });

    state.cart.forEach((item)=> {
      for(let i = 0; i< item.reserveDays; i++){
        productIds.push(item._id);
      }
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="shopping cart">🛒</span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ?(
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong> Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button onClick={submitCheckout}>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ):(
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
  </div>
  );
};

export default Cart;