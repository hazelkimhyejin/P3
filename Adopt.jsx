import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function adopt() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>ADOPT</h1>
  <p style ={{color: "black"}}>CATS FOR ADOPTION.</p>  
  <p>Cat Image</p>
  <p>Cat Name</p>
  <p>Cat Date of Birth</p>
  <p>Cat Personality</p>
  <br></br><br></br>
  <p>Cat Image</p>
  <p>Cat Name</p>
  <p>Cat Date of Birth</p>
  <p>Cat Personality</p>
  <br></br><br></br>
  <p>Cat Image</p>
  <p>Cat Name</p>
  <p>Cat Date of Birth</p>
  <p>Cat Personality</p>
  <br></br><br></br>
  <p>Cat Image</p>
  <p>Cat Name</p>
  <p>Cat Date of Birth</p>
  <p>Cat Personality</p>
  <br></br><br></br>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOGIN</Button>

  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default adopt;
