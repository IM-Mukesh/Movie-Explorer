import React from "react";
import { movies } from "../data/movies";

const MovieDetail = ({ movieId, onBackToHome }) => {
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="page">
        <div className="error">
          <h2>Movie not found</h2>
          <button onClick={onBackToHome} className="button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <button onClick={onBackToHome} className="back-button">
        ← Back to Movies
      </button>
      <div className="detail-container">
        <div className="detail-image-container">
          <img src={movie.image} alt={movie.title} className="detail-image" />
        </div>
        <div className="detail-content">
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-meta">
            <span className="detail-genre">{movie.genre}</span>
            <div className="detail-rating">
              <span className="star">⭐</span>
              <span>{movie.rating}</span>
            </div>
          </div>
          <p className="detail-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
