import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function VisitUs() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>VISIT US</h1>
  <p>Address: </p>
  <p>Tue, Wed, Thu, Fri, Sat, Sun
  <br></br>
  1 hr
  <br></br>
  20 Singapore dollars
  SGD 20</p>
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">BOOK NOW</Button>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default VisitUs;
