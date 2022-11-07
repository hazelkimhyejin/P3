import debug from "debug";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const log = debug("movies:pages:Search");

function Search({ num }) {
  // const { favs } = useContext(FavsContext);
  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [title, setTitle] = useState("cat");
  const title = searchParams.get("title");
  log("searchParams: %o", title);

  const searchMovies = async (query) => {
    // const url = urlcat("https://api.themoviedb.org", "/3/search/movie", {
    //   query,
    //   api_key: "c33b955b56b34e6ac8cf34064ef78bbf",
    // });
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c33b955b56b34e6ac8cf34064ef78bbf`;
    log("url:", url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      log(data.results);
      setResult(data.results);
    } catch (error) {
      log(error);
    }
  };

  useEffect(() => {
    searchMovies(title);
  }, [title]);

  const handleSearch = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    log("movie:", title);
    // setTitle(title);
    // searchMovies(title);
    setSearchParams({ title });
  };

  return (
    <div>
      <p>You liked {num} Movies</p>
      <form onSubmit={handleSearch}>
        <input name="title" type="search" defaultValue={title} />
        <button>Search</button>
      </form>
      <ol>
        {result.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
    </div>
  );
}

Search.propTypes = {
  num: PropTypes.number,
};

export default Search;
