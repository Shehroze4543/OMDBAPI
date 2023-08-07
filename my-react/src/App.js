import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

import "./App.css";
function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = "e6dbdb78";

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie("The Mummy");
  }, []);
  return (
    <>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;
