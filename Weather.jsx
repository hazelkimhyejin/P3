import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seoul from "./Seoul";
import Singapore from "./Singapore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card } from "react-bootstrap";


function Weather() {
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [temperature, setTemperature] = useState([])
  const [time, setTime] = useState([])

  const handleSearch = async (e)=>{  
    e.preventDefault(); //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(latitude)}&longitude=${parseFloat(longitude)}&hourly=temperature_2m`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    setTemperature([...data.hourly.temperature_2m])
    setTime([...data.hourly.time])
  }

  function parseDate(dateStr){
    const date = new Date (dateStr)
    let year = date.getFullYear()
    let month = date.getMonth()
    let datetime = date.getDate()

    if(datetime < 10){
      datetime = '0' + datetime
    }
    if(month < 10){
      month = '0' + month
    }

    return `${year}-${month}-${datetime}`
  }

 return(
  <>
  <div className="">
  <p></p>
  <br></br>
  <p>Key in the Longitude and Latitude of your country. Note: Latitude should be between -90 to 90.</p>
  <Form onSubmit={handleSearch}>
  <Row className="mt-5 mx-5">
  <Col>
  <Form.Group className="mb-3" controlId="">
  <Form.Control type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)} placeholder="Longitude " />
</Form.Group>
</Col>
<Col>
<Form.Group className="mb-3" controlId="">
<Form.Control type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)} placeholder="Latitude " />
</Form.Group>
</Col>
<Col>
<Button variant="outline-primary" type='submit' size="md">SEARCH</Button>
</Col>

</Row>
</Form>

<div>
<Row xs={2} md={3}  lg={4}  className="g-4">
{time && time.map((time, index) => (

  <Col key={index}>
  <Card >
    <Card.Body>
      <Card.Title>Time: {parseDate(time)}</Card.Title>
      <Card.Text>Temperature: {temperature[index]} °C </Card.Text>

      </Card.Body>
  </Card>
  </Col>
))}
</Row>
</div>

</div>
  </>
 )
}

export default Weather;
