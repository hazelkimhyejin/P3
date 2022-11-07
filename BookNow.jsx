import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function BookNow() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>BOOK NOW</h1>
  <p>All bookings are non-refundable but are transferrable.
  <br></br>
  No change of date/time will be entertained.
  <br></br>
  Please send your friend a screenshot of our confirmation email for transferring.
  <br></br>
  All children aged 0 to 16 years require a ticket and must be accompanied by an adult.
  <br></br>
  Thank mew for your understanding!</p>
  <p>SESSIONS</p>
  <p style ={{color: "black"}}>INSERT CALENDER API HERE</p>  
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOGIN</Button>

  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default BookNow;
