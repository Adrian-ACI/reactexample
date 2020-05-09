import React, { Component } from "react";
import * as ReactB from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ReactB.Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <ReactB.Container>
            <ReactB.Navbar.Brand href="/">NeuroTraining</ReactB.Navbar.Brand>
            <ReactB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactB.Navbar.Collapse id="responsive-navbar-nav">
              <ReactB.Nav className="mr-auto"></ReactB.Nav>
              <ReactB.Nav>
                <ReactB.Nav.Link href="#deets">Icono</ReactB.Nav.Link>
                <ReactB.NavDropdown
                  title="Opciones"
                  id="collasible-nav-dropdown"
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
      </div>
    );
  }
}
