import React from "react";
import CameraList from "../components/CameraList";
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <CameraList />
      <Cart />
    </div>
  );
};

export default Home;
