import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function Merchandise() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <h1>MERCHANDISE</h1>
  <p>
  <br></br>
  <strong>We accept payments via Paylah/Paynow/Paypal.</strong> 
  <strong> Paylah/Paynow</strong> to<strong> 88948312</strong>. Screenshot your successful payment and whatsapp <strong>88948312</strong> and we will proceed to process your order. 
  <br></br>
  <strong>Delivery</strong>
  <br></br>
  We use an express doorstep courier for all our orders. Please allow up to 3 working days to process your order as this is a volunteer-run store. Your parcel's tracking details will be sent to you once it is shipped. Contact us if you have any queries on your order status.
  <br></br>
  <strong>Returns/Refunds</strong>
  <br></br>
  Strictly no refunds/returns.
  <br></br>
 <strong>Donation & Proceeds</strong>
 <br></br>
  100% of the proceeds from sales on this site, as well as donations collected, go directly to Community Cats Singapore. 
  <br></br>
<strong>Contact Us</strong>
<br></br>
Contact us at communitycatssg@gmail.com if you'd like to understand more about our work or join us.</p>
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">REMEMBER ME</Button>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default Merchandise;
