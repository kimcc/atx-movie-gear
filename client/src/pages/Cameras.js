import React from 'react';
import { Row, Container } from 'react-bootstrap';
import '../styles.css';
import CameraCard from '../components/CameraCard';
import { useStoreContext } from "../utils/GlobalState";

function Cameras(){

  const { model, brand, key, image, resolution, price, reserveDays, _id } = {
    "model": "myCam",
    "brand": "MyCanon",
    "key": "1",
    "image": "canon_c200.jpeg",
    "resolution": "4K",
    "price": "95",
    "reserveDays": "",
    "_id": "2"
  }

  const [state, dispatch] = useStoreContext();


  return (
    <div className="container my-1">
    {/* //   <Link to="/detail">More</Link> */}
       <h1>Cameras</h1>
       <Container>
         <Row>
          <CameraCard
            _id={_id}
            key={key}
            image={image}
            model={model}
            brand={brand}
            resolution={resolution}
            price={price}
            reserveDays={reserveDays} />
        </Row>
      </Container>
    </div>
  );
}

export default Cameras;
