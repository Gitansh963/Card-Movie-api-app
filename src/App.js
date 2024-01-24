import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c379f5c4";
const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNj…zI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect(() => {
    searchMovies("Spiderman");
    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="container">
          <p className="no-movies">No movies found!</p>
        </div>
      )}
    </>
  );
}

export default App;
