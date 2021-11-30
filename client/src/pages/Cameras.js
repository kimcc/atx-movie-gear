import React from 'react';
import { Row, Container } from 'react-bootstrap';
import '../styles.css';
import CameraList from '../components/CameraList';
import { useStoreContext } from "../utils/GlobalState";

function Cameras(){

  const { model, brand, key, image, resolution, price, reserveDays, _id } =
    {
    // "model": "myCam",
    // "brand": "MyCanon",
    // "key": "1",
    // "image": "canon_c200.jpeg",
    // "resolution": "4K",
    // "price": "95",
    // "reserveDays": "",
    // "_id": "2"
  }


  const [state, dispatch] = useStoreContext();


  return (
    <div className=" my-1">
       <h1>Cameras</h1>
       <Container>
         <Row>
          <CameraList />

        </Row>
      </Container>
    </div>
  );
}

export default Cameras;
