import React from "react";

const MovieCard = ({ movie, onMovieClick }) => {
  const handleClick = () => {
    onMovieClick(movie.id);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="image-container">
        <img src={movie.image} alt={movie.title} className="movie-image" />
      </div>
      <div className="card-content">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-genre">{movie.genre}</p>
        <div className="movie-rating">
          <span className="star">⭐</span>
          <span>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
