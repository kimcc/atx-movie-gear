import React from 'react';
// import { Link, useParams, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles.css';
// import Detail from './Detail';
// import CameraItem from '../components/CameraItem';

function DummyProduct(){

    // const { key, image, brand, model, resolution, price } = CameraItem;



          // {filtercameras().map((camera) => (
          //   <CameraItem
          //     key={camera._id}
          //     _id={camera._id}
          //     image={camera.image}
          //     brand={camera.brand}
          //     model={camera.model}
          //     resolution={camera.resolution}
          //     price={camera.price}
          //     reserveDays={camera.reserveDays}
          //   />
          // ))}

  return (
    <div className="container my-1">
    {/* //   <Link to="/detail">More</Link> */}
       <h1>Cameras</h1>
       <Container>
         <Row>
    {/* //     <Col className="productCard">
    //       <Card border="warning" style={{ width: '18rem' }}>
    //         <div className="container">
    //           <img */}
    {/* //           className="productImage"
    //           justifyContent="center"
    //           style={{ width: '14rem' }}
    //           variant="top"
    //           src={require(`../../public/images/${image}.jpg`).default}
    //           alt={brand}
    //           key={key} />
    //         </div>
    //         <Card.Body>
    //           <Card.Title>{brand} {model}</Card.Title>
    //           <Card.Text>
    //             {resolution}
    //           </Card.Text>
    //           <Button onClick="./Details" variant="dark">See Product Details</Button>
    //           <footer id="price">{price}</footer>
    //         </Card.Body>
    //       </Card>
    //     </Col> */}

        <Col className="productCard">
          <Card border="warning" style={{ width: '18rem' }}>
            <div className="container">
              <img className="productImage" justifyContent="center" style={{ width: '14rem' }} variant="top" src="/images/SONY_PXW-Fx6_XDCAM.jpeg" />
            </div>
            <Card.Body>
              <Card.Title>Sony PXW Fx6 XDCam</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">See Product Details</Button>
              <footer id="price">$95/day</footer>
            </Card.Body>
          </Card>
        </Col>

        <Col className="productCard">
          <Card border="warning" style={{ width: '18rem' }}>
            <div className="container">
              <img className="productImage" justifyContent="center" style={{ width: '14rem' }} variant="top" src="images/canon_c300_markiii.jpeg" />
            </div>
            <Card.Body>
              <Card.Title>Canon C300 Mark III</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">See Product Details</Button>
              <footer id="price">$95/day</footer>
            </Card.Body>
          </Card>
        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default DummyProduct;
