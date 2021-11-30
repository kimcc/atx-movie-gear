import React, { useState } from "react";
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import Auth from '../../utils/auth';
import { BsXLg } from "react-icons/bs";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

function CartDrawer(props) {

  const [state, dispatch]= useStoreContext();

  // For the date picker
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();

  return (
    <div>
      <div className="flex-row space-between">
        <h2>Shopping Cart</h2>
        <div className="close" onClick={props.toggleCart}>
          <BsXLg />
        </div>
      </div>
     
      {state.cart.length ?(
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row">
            <div className="flex-column">
              <h6>Pickup & dropoff dates</h6>
              <DateRangePicker
                startDate={startDate}
                startDateId="start-date" 
                endDate={endDate} 
                endDateId="end-date" 
                onDatesChange={({ startDate, endDate }) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                startDatePlaceholderText="Pickup date"
                endDatePlaceholderText="Dropoff date"
              />

            </div>
          </div>

          <div style={{marginTop: "24px"}}>

          <label for="project">
            <h6>Project type</h6>
          </label>
            <select name="project" id="project">
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
              <option value="project3">Project 3</option>
              <option value="project4">Project 4</option>
            </select>
          </div>

          <div className="flex-row space-between">
            <strong> Total: ${props.calculateTotal}</strong>
            {
              Auth.loggedIn() ?
                <button onClick={props.submitCheckout}>
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
