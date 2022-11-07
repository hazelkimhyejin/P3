import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import App from "../App";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const log = debug("movies:pages:Movies");

function OurVeterinarians({ addToFavs }) {
  const handleFavButton = () => {
    console.log("adding");
  handleAddFav(number);
  }
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [searchVal, setSearchVal] = useState("")
  // const { dispatch } = useContext(FavsContext);

  log("status: %o", status);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf";

    setStatus("pending");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStatus("done");
        setMovies(data.results);
      })
      .catch((error) => {
        setStatus("error");
        log(error);
      });
  }, []);

  const handleAddToFavs = (movie) => () => {
    console.log(movie);
    console.log("handleAddToFavs");
    addToFavs(movie);
    // dispatch({ type: ADD_TO_FAVS, payload: movie });
  };

  const handleSearch = (e)=>{
    e.preventDefault()
    if(searchVal !== ""){
      let filtered = movies.filter(movie=> movie.title.includes(searchVal))   
      setMovies(filtered)

    }else{
      const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf";

    setStatus("pending");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStatus("done");
        setMovies(data.results);
      })
      .catch((error) => {
        setStatus("error");
        log(error);
      });
    }

  }

  if (status === "pending") {
    return <ProgressBar />;
  }

  if (status === "error") {
    return <p>Something went wrong</p>;
  }
console.log(movies)
  return (
    <Container>
    <Form onSubmit={handleSearch}>
    <Row className="mt-5 mx-5">
    <Col md={{offset: 3}}>
    <Form.Group className="mb-3" controlId="">
    <Form.Control type="text" value={searchVal} onChange={(e)=> setSearchVal(e.target.value)}  placeholder="Search movies... " />
  </Form.Group>
  </Col>
 
 
  <Col>
  <Button variant="outline-primary" style={{backgroundColor: "#8E54E9", color: "white"}} type='submit' size="md">SEARCH</Button>
  </Col>
  
  </Row>
  </Form>

    <Row xs={1} md={3}  lg={4}  className="g-4">

      {movies.map((movie) => (

        <Col>
        <Card key={movie.id}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          />
          <Card.Body style={{height: "220px", maxHeight: "220px", overflow: "hidden"}} >
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text style={{maxHeight: "200px", overflow: "hidden", textOverflow: "ellipsis"}}>{movie.overview}</Card.Text>
            </Card.Body>
            <Button enabled="true" onClick={handleAddToFavs(movie)}>
              Add to Favs
            </Button>
        </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

Movies.propTypes = {
  addToFavs: PropTypes.func,
};

export default OurVeterinarians;
