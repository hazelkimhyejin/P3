import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function News() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>NEWS</h1>
  <p style ={{color: "black"}}>COMMUNITY CATS SINGAPORE IN THE NEWS</p>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default News;
