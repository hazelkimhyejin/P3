import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function Donate() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>DONATE</h1>
  <p style ={{color: "black"}}>Donate today!</p>  
  <p style ={{color: "black"}}>Paylah/Paynow to COMMUNITYCATSSINGAPORE and send us a screenshot!<br></br> <br></br>UEN: <br></br> QR CODE: </p>    
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">DONATE</Button>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default Donate;
