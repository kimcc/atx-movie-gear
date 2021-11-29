
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { Card, Button, Row, Col, Container, ListGroup, Item } from 'react-bootstrap';
import CameraCard from '../CameraCard';
import { QUERY_CAMERAS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import AddToCart from '../AddToCart';

import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  ADD_TO_CART,
  UPDATE_CAMERAS
} from "../../utils/actions";
import Cart from '../Cart';

function CameraItemDetail(item) {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCamera, setCurrentCamera] = useState({
    "model": "myCam",
    "brand": "MyCanon",
    "key": "1",
    "image": "canon_c200.jpeg",
    "resolution": "4K",
    "price": "150",
    "description": "tHIS IS THE CAMERA YOU WANT, OKAY????",
    "lensCompatibility": "EF-Mount",
    "quantity": "2",
    "reserveDays": "",
    "_id": "2"
  });

  const { loading, data } = useQuery(QUERY_CAMERAS);

  const { cameras, cart } = state;

  const {
    image,
    brand,
    model,
    resolution,
    description,
    lensCompatibility,
    quantity,
    _id,
    price
  } = item;

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

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentCamera._id
    });
  };

  useEffect(() => {
    if (cameras.length) {
      setCurrentCamera(cameras.find((camera) => camera._id === id));
    }else if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });
    }
  }, [cameras, data, loading, dispatch,  id]);

  return (
    <>
      {currentCamera ? (
        <div className="container my-1">
          <h1 className="productTitle">{currentCamera.brand + " " + currentCamera.model}</h1>
          <Link to="/">← Back to Cameras</Link>
            <Container>
                <Row>
                  <Col className="productImage">
                    <img src={`/images/${currentCamera.image}`}/>
                  </Col>

                  <Col className="productDescription">
                    <h2 className="productDescriptionHeading">
                      {currentCamera.brand + " " + currentCamera.model}</h2>
                      <div><h3>${currentCamera.price}</h3>/day</div>
                      <ListGroup variant="flush">
                        <h4>Specs</h4>
                        <ListGroup.Item>
                          <h5 className="listTitle">Resolution: </h5>
                          {currentCamera.resolution}
                          </ListGroup.Item>
                        <ListGroup.Item>
                        <h5 className="listTitle">Lens Compatibility: </h5>
                        {currentCamera.lensCompatibility}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h5 className="listTitle">About: </h5>
                          {currentCamera.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h5 className="listTitle">In Stock: </h5>
                          {currentCamera.quantity}
                        </ListGroup.Item>
                      </ListGroup>
                  </Col>

                  <Col className="reservationAndCart">
                    <AddToCart currentCamera={currentCamera} />
                  </Col>
              </Row>
            </Container>
          </div>
      ) : null}
    </>
  )
}

export default CameraItemDetail;