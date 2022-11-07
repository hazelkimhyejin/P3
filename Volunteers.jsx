import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function Volunteers() {
    return <div>
    <Form>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
  <br></br>
  <h1>OUR VOLUNTEERS</h1>
  <p style ={{color: "black"}}>Be a volunteer today! We need volunteers to help us clean, care for our cats and kittens and to help out with your skills
  (photography, videography, graphics design etc.) at Community Cats Singapore. If you are 16  years and above and are able to commit to a regular schedule,  please fill in the form to join our community.</p>
 <br></br>
 <p>
 Volunteers are required to come weekly for a minimum of 3 months (12 times). Advance notice required for travel plans.
 Choose length of commitment:
 *
 3 - 6 months
 6 months and above
 Do you have any prior experience with cats?
 *
 Yes - Have cats at home / work with cats
 No - Have no cats at home / a little interactions with stray cats
 What is the reason you want to volunteer?
 *
 I am a...
 *
 Specialist. I can help KISS to launch a Social Media Campaign as I'm a pro in this area or PR, Media Relations, Website Design, or Video Production.
 Cat Slave! I can commit weekly to come to clean, feed, and take care of the cats.</p>
<p style ={{color: "black"}}>Volunteer Now!</p>
  <p>FULL NAME</p><p style ={{color: "white"}}>FULL NAME</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="FULL NAME... " />
  <p>MOBILE</p><p style ={{color: "white"}}>MOBILE</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="MOBILE... " />
  <p>EMAIL</p><p style ={{color: "white"}}>EMAIL</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="EMAIL... " />
  <p>DATE OF BIRTH</p><p style ={{color: "white"}}>DATE OF BIRTH</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="DATE OF BIRTH... " />
  <p>You must be above 21 years old</p>
  <br></br>
  <p>NATIONALITY</p><p style ={{color: "white"}}>DATE OF BIRTH</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="NATIONALITY... " />
  <br></br>
  <p>GENDER</p>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">FEMALE</Button>
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">MALE</Button>
  <br></br>
  <p>OCCUPATION</p><p style ={{color: "white"}}>OCCUPATIONN</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="OCCUPATION... " />
  <p>IF STUDENT, PLEASE NAME SCHOOL/UNIVERSITY</p><p style ={{color: "white"}}>DATE OF BIRTH</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="NAME OF SCHOOL/UNIVERSITY... " />
  <p style ={{color: "white"}}>NATIONALITY</p>     <Form.Control type="text" onChange={(e)=> setSearchVal(e.target.value)}  placeholder="EMAIL... " />
  <Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">YES</Button>
  <p></p><Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">NO</Button>
<p></p>
<strong>SELECT ALL THAT APPLY, I AM GOOD AT</strong>
<br></br><br></br>
<Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SOCIAL MEDIA</Button>
<Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">WEBSITE DESIGN</Button>
<Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">VIDEO PRODUCTION</Button>
<Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">CLEANING</Button>
<br></br><br></br>
<Button variant="outline-primary" style={{backgroundColor: "#8200f7", color: "white"}} type='submit' size="md">SUBMIT FORM</Button>
  </Form.Group>
  </Col>

  
  </Row>
  </Form>
  
    </div>;
  }
  
  export default Volunteers;
