import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const Home = ({ onMovieClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="results-info">
        {searchTerm && (
          <p>
            Found {filteredMovies.length} movie(s) for "{searchTerm}"
          </p>
        )}
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
