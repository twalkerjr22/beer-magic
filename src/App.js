import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Nav";
import Nav from "./components/Nav";
import BeerList from "./components/BeerList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container style={{marginTop:"30px"}}>
          <Row>
            <Col md={12}>
              <BeerList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
