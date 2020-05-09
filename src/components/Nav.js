import React, { Component } from "react";
import * as ReactB from "react-bootstrap";

import LogoUser from "../images/descarga.png";
import Logo from "../images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <ReactB.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactB.Container>
          <ReactB.Navbar.Brand href="/home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            NeuroTraining
          </ReactB.Navbar.Brand>
          <ReactB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactB.Navbar.Collapse id="responsive-navbar-nav">
            <ReactB.Nav className="mr-auto">
              <ReactB.Nav.Link href="/home">Inicio</ReactB.Nav.Link>
              <ReactB.Nav.Link href="/perfil">Perfil</ReactB.Nav.Link>
              <ReactB.Nav.Link href="/entrenamiento">
                Entrenamiento
              </ReactB.Nav.Link>
              <ReactB.Nav.Link href="/calendario">Calendario</ReactB.Nav.Link>
              <ReactB.Nav.Link href="/juego">Juegos</ReactB.Nav.Link>
            </ReactB.Nav>
            <ReactB.Nav>
              <ReactB.Nav.Link href="#deets">
                <img
                  alt=""
                  src={LogoUser}
                  width="30"
                  height="25"
                  className="d-inline-block align-top"
                />
              </ReactB.Nav.Link>
              <ReactB.NavDropdown
                title="Opciones"
                id="collasible-nav-dropdown"
                //drop="left"
              >
                <ReactB.NavDropdown.Item href="#action/3.1">
                  Configurar Cuenta
                </ReactB.NavDropdown.Item>
                <ReactB.NavDropdown.Item href="#action/3.2">
                  Otra opcion
                </ReactB.NavDropdown.Item>
                <ReactB.NavDropdown.Divider />
                <ReactB.NavDropdown.Item href="#action/3.3">
                  Salir
                </ReactB.NavDropdown.Item>
              </ReactB.NavDropdown>
            </ReactB.Nav>
          </ReactB.Navbar.Collapse>
        </ReactB.Container>
      </ReactB.Navbar>
    );
  }
}
