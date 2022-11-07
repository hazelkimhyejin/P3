import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function Login() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>LOGIN</h1>
  <p style ={{color: "white"}}>EMAIL</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="EMAIL... " />
  <p style ={{color: "white"}}>PASSWORD</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="PASSWORD... " />
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">REMEMBER ME</Button>
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">LOG IN</Button>
  <p></p>  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SIGN UP</Button>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default Login;
