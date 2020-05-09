import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Slide1 from "./images/j1.png";
import Slide2 from "./images/j2.png";
import Slide3 from "./images/j3.png";
import Slide4 from "./images/j4.png";
import Slide5 from "./images/j5.png";

export default class GridHome extends Component {
  render() {
    return (
      <div>
        <Container className="redes">
          <h2>Juegos populares</h2>
          <Row>
            <Col>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide1}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Supera el reto en menor tiempo posible</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra la imagen diferente</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide3}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra la diferencia en la imagenes</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide4}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra el numero distinto</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide5}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>
              <p>Una prueba de agilidad mental</p>
            </Col>
          </Row>

          <h2>Mas entrenamientos</h2>
          <Row>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide3}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>
              <p>Supera el reto en menor tiempo posible</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide4}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra la imagen diferente</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide5}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra la diferencia en la imagenes</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>

              <p>Encuentra el numero distinto</p>
            </Col>
            <Col md>
              <a title="Juego" href="/home">
                <img
                  className="d-block w-100"
                  src={Slide1}
                  alt="First slide"
                  height="auto"
                  width="auto"
                />
              </a>
              <p>Una prueba de agilidad mental</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
