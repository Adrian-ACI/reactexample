import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default class Navegation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">NeuroTraining</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/notas">Perfil</Nav.Link>
              <Nav.Link href="/usuario">Entrenamiento</Nav.Link>
              <Nav.Link href="/usuario">Calendario</Nav.Link>
              <Nav.Link href="/usuario">Juegos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Icono</Nav.Link>
              <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Configurar Cuenta
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Otra opcion
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Salir</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
