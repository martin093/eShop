import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import banner from "../img/banner.jpg";
import styles from "./CustomCarousel.module.css";

class CustomCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className={styles.banner} src={banner} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.banner} src={banner} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.banner} src={banner} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CustomCarousel;
