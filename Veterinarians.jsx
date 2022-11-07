import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function Veterinarians() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>VETERINARIANS</h1>
  <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="VETERINARIAN A " />
  <p style ={{color: "black"}}>INSERT IMAGE HERE VETERINARIAN A</p>
  <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="VETERINARIAN B " />
  <p style ={{color: "black"}}>VETERINARIAN B</p>
  <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="VETERINARIAN C " />
  <p style ={{color: "black"}}>VETERINARIAN C</p>
  <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="VETERINARIAN D " />
  <p style ={{color: "black"}}>VETERINARIAN D</p>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default Veterinarians;
