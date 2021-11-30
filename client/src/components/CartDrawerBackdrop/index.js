import React from "react";

function CartDrawerBackdrop(props) {
  return (
    <div className="cart-backdrop" onClick={props.toggleCart} />
  )
}

export default CartDrawerBackdrop;
