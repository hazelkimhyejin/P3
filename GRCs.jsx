import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function grcs() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>GRCs</h1>
  <p style ={{color: "black"}}>LIST OF GRCS.</p>  
  
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">NORTH</Button>
  <br></br><br></br>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SOUTH</Button>
  <br></br><br></br>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">EAST</Button>
  <br></br><br></br>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">WEST</Button>
  <br></br><br></br>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">JURONG EAST</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">CLEMENTI</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">BOON LAY</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">CHINESE GARDEN</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">YISHUN</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">ANG MO KIO</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">TOA PAYOH</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">BUKIT TIMAH</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">EAST COAST</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOGIN</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOGIN</Button>

  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }


  
  export default grcs;
