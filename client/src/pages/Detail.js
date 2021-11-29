// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import CameraItemDetail from '../components/CameraItemDetail';

// import { QUERY_CAMERAS } from '../utils/queries';
// import spinner from '../assets/spinner.gif';

// import { useStoreContext } from "../utils/GlobalState";
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_DAYS,
//   ADD_TO_CART,
//   UPDATE_CAMERAS
// } from "../utils/actions";
// import Cart from '../components/Cart';

// function Detail() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentCamera, setCurrentCamera] = useState({
//     "model": "myCam",
// "brand": "MyCanon",
// "key": "1",
// "image": "canon_c200.jpeg",
// "resolution": "4K",
// "price": "95",
// "reserveDays": "",
// "_id": "1"});

//   const { loading, data } = useQuery(QUERY_CAMERAS);

//   const { cameras, cart } = state;

//   const addToCart = () => {
//     // find the cart item with the matching id
//     const itemInCart = cart.find((cartItem)=> cartItem._id === id);

//     //if there was a match, call UPDATE with a new purchase quantity
//     if(itemInCart){
//       dispatch({
//         type: UPDATE_CART_DAYS,
//         _id: id,
//         reserveDays: parseInt(itemInCart.reserveDays) + 1
//       });
//     }else{
//       dispatch({
//         type: ADD_TO_CART,
//         camera: { ...currentCamera, reserveDays: 1 }
//       });
//     }
//   };

//   const removeFromCart = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: currentCamera._id
//     });
//   };

//   useEffect(() => {
//     if (cameras.length) {
//       setCurrentCamera(cameras.find((camera) => camera._id === id));
//     }else if(data){
//       dispatch({
//         type: UPDATE_CAMERAS,
//         cameras: data.cameras
//       });
//     }
//   }, [cameras, data, loading, dispatch,  id]);

//   // const { model, brand, key, image, resolution, price, reserveDays, _id } = {
//   //   "model": "myCam",
//   //   "brand": "MyCanon",
//   //   "key": "1",
//   //   "image": "canon_c200.jpeg",
//   //   "resolution": "4K",
//   //   "price": "95",
//   //   "reserveDays": "",
//   //   "_id": "2"
//   // }


//   return (
//     <>
//       {currentCamera ? (
//         <div className="container my-1">
//                     <Link to="/">← Back to Cameras</Link>
// <Container>
//          <Row>
//           <CameraItemDetail
//             _id={currentCamera._id}
//             key={currentCamera.key}
//             image={currentCamera.image}
//             model={currentCamera.model}
//             brand={currentCamera.brand}
//             resolution={currentCamera.resolution}
//             price={currentCamera.price}
//             reserveDays={currentCamera.reserveDays} />
//         </Row>
//       </Container>

//           <p>
//             <button onClick={addToCart}>Add to Cart</button>
//             <button
//               disabled={!cart.find(p => p._id === currentCamera._id)}
//               onClick={removeFromCart}
//             >
//               Remove from Cart
//             </button>
//           </p>


//         </div>
//       ) : null}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//       <Cart/>
//     </>
//   );
// }

// export default Detail;