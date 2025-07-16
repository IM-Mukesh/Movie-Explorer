import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";
const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
    setCurrentView("detail");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedMovieId(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "detail":
        return (
          <MovieDetail
            movieId={selectedMovieId}
            onBackToHome={handleBackToHome}
          />
        );
      default:
        return <Home onMovieClick={handleMovieClick} />;
    }
  };

  return (
    <div className="app">
      <Header onNavigateHome={handleBackToHome} />
      <main className="main">{renderCurrentView()}</main>

      <Footer />
    </div>
  );
};

export default App;
