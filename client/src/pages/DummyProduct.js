import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles.css';

function DummyProduct(){




  return (
    <div className="container my-1">
      <Link to="/detail">More</Link>
      <h1>Cameras</h1>
    <Container>
      <Row>
        <Col className="productCard">
          <Card border="warning" style={{ width: '18rem' }}>
            <div className="container">
              <img className="productImage" justifyContent="center" style={{ width: '14rem' }} variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            </div>
            <Card.Body>
              <Card.Title>Sony PWX Fx9 XDCAm</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">See Product Details</Button>
              <footer id="price">$95/day</footer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make udarp the bulk of
                the card's content.
              </Card.Text>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/SONY_PXW-Fx9_XDCAM.jpeg" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default DummyProduct;
