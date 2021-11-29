import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_DAYS} from '../../utils/actions';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

// A Camera Summary for use on the Camera Listings page
function CameraCard(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    brand,
    model,
    resolution,
    description,
    _id,
    price
  } = item;

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem)=> cartItem._id === _id);

    //if there was a match, call UPDATE with a new purchase reserveDays
    if(itemInCart){
      dispatch({
        type: UPDATE_CART_DAYS,
        _id: _id,
        reserveDays: parseInt(itemInCart.reserveDays) + 1
      });

    }else{
      dispatch({
        type: ADD_TO_CART,
        camera: { ...item, reserveDays: 1 }
      });
    }
  }

  return (
    <Col className="productCard">
    <Link to={`/cameras/${_id}`}/>
    <Card border="warning" style={{ width: '18rem' }}>
      <div className="container">
        <img className="productImage" justifyContent="center" style={{ width: '14rem' }} variant="top" src={`/images/${image}`} />
      </div>
      <Card.Body>
        <Card.Title>{brand + " " + model}</Card.Title>
        <Card.Text>
          <subtitle>{resolution}</subtitle>
          {description}
        </Card.Text>
        <Button onClick={addToCart} variant="dark">See Product Details</Button>
        <footer id="price">${price}</footer>
      </Card.Body>
    </Card>
  </Col>


  //   <div className="card px-1 py-1">

  //       <img
  //         alt={model}
  //         src={`/images/${image}`}
  //       />
  //       <p>{brand + " " + model}</p>
  //       <p>{resolution}</p>
  //     </Link>
  //     <div>
  //       <span>${price}</span>
  //     </div>
  //     <button onClick ={addToCart}>Add to cart</button>
  //   </div>
  );
}

export default CameraCard;
