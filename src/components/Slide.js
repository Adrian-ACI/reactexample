import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import Slide1 from "./images/banner1.png";
import Slide2 from "./images/banner4.png";
import Slide3 from "./images/banner2.png";

export default class Slide extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
            // height="250px"
            // width="250px"
          />
          <Carousel.Caption>
            <h3>Juega</h3>
            <p>Queremos invitarte a superar estos retos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Third slide"
            // height="250px"
            //width="150px"
          />

          <Carousel.Caption>
            <h3>Aprende</h3>
            <p>Queremos invitarte a superar estos retos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
            // height="250px"
          />

          <Carousel.Caption>
            <h3>Disfruta</h3>
            <p>Queremos invitarte a superar estos retos</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
