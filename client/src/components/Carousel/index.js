import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function CarouselSlides() {
    return (
        <div>
            <Carousel className="hero carouselContainer">
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="https://img.pagecloud.com/QNnPcsIfUD5ljtqu_Ds5WBJKRL0=/3200x0/filters:no_upscale()/austinmoviegear/images/IMG_0487-dd153.png"
                    alt="Quality equipment for all your media needs"
                    />
                    <Carousel.Caption>
                    <h3>The go-to place for Austin filmmakers</h3>
                    <p>Quality equipment for all your media needs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="https://j.gifs.com/16BVYq.gif"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Have you met Keith?</h3>
                    <p>Locally owned and lovingly operated, our team of experts is here to help you keep it weird.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="redlens.webp"
                    alt=""
                    />

                    <Carousel.Caption>
                    <h3>Get the best bang for your buck!</h3>
                    <p>Our multi-day discounts help you keep your shoots affordable.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>

    )
}


export default CarouselSlides;