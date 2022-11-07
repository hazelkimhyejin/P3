import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function contactus() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>CONTACT US</h1>
  <p style ={{color: "black"}}><strong>Our Mailing Address</strong>
  <br></br>
  COMMUNITY CATS SINGAPORE
 <br></br>
<strong> Mailing Address:</strong>
<br></br>
  Singapore 919191
  <br></br><br></br>
  <strong>Other Useful Contacts</strong>
  <br></br><br></br>
<strong>Lost Pets: SPCA</strong>
<br></br>
  62875355
  <br></br>
  <strong>Agri-Food & Veterinary Authority</strong>
  <br></br>
  1800 4761600
  57 Sungei Tengah Rd Singapore 699013
  <br></br>
  <strong> Straits Times Classifieds (Free Ad)</strong>
  <br></br>
  1800 2899988
  <br></br>
<strong>24hrs Emergency:SPCA (Domestic animals)</strong>
<br></br>
  62875355 ext 9
  <br></br>
<strong>ACRES (Wildlife)</strong>
<br></br>
  97837782
  <br></br>
  <strong>24-hour Animal Clinics / Veterinary Centres</strong>
  <br></br>
  <strong>For animal cruelty matters: SPCA (Domestic animals)</strong>
  <br></br>
  62875355 ext 9
  <br></br>
 <strong>ACRES (Wildlife)</strong>
  <br></br>
  97837782
  <br></br>
  <strong>Agri-Food & Veterinary Authority</strong>  <br></br>
  1800 4761600</p>  
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">EMAIL US</Button>

  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default contactus;
