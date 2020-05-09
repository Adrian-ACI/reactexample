import React, { Component } from "react";
import * as ReactB from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ReactB.Container>
          <ReactB.Row>
            <ReactB.Col sm={8}>sm=8</ReactB.Col>
            <ReactB.Col sm={4}>sm=4</ReactB.Col>
          </ReactB.Row>
        </ReactB.Container>
      </div>
    );
  }
}
