import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function GetInvolved() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>VOLUNTEER</h1>
  <p style ={{color: "black"}}>PATIENT NRIC</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="Enter NRIC... " />
  <p style ={{color: "black"}}>PASSWORD</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="Enter Password... " />
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOGIN</Button>
  <p style ={{color: "black"}}>I want to be like the password must be minimum 7 letters and inclusive of special character.</p> 
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default GetInvolved;
