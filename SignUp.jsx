import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import "./SignUp.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function SignUp() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>SIGN UP</h1>
  <p style ={{color: "black"}}>FIRST NAME</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="FIRST NAME... " />
  <p style ={{color: "black"}}>LAST NAME</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="LAST NAME... " />
  <p style ={{color: "black"}}>USERNAME</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="USERNAME... " />
  <p style ={{color: "black"}}>PASSWORD</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="PASSWORD... " />
  <p style ={{color: "black"}}>CONFIRM PASSWORD</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="CONFIRM PASSWORD... " />
  <br></br>
  <p>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
  <br></br><Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SHOW PASSWORD</Button>
  <br></br><br></br><Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SIGN IN INSTEAD</Button>
  <br></br> <br></br><Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">NEXT</Button>
  <p style ={{color: "white"}}>I want to be like the password must be minimum 7 letters and inclusive of special character.</p> 
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default SignUp;
