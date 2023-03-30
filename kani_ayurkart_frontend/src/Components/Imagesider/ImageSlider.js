import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarousImgOne from "../../images/carousel-images/carousel-img.jpeg";
import CarousImgTwo from "../../images/carousel-images/carousel-img2.jpg";
import CarousImgThree from "../../images/carousel-images/carousel3.jpg";
import "./ImageSlider.css"


function ImageSlider(){
    return(
        < >
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          height={500}
          src={CarousImgOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AVP AYURVEDA MEDICINE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={CarousImgTwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>AYURVEDA SKIN CREAMS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarousImgThree}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        
        </>
    )
}
export default ImageSlider;