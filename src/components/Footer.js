// src/components/Footer.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>🎬 Movie Explorer</h3>
          <p>
            Your go-to place for exploring movies across genres and ratings.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Genres</a>
            </li>
            <li>
              <a href="#">Top Rated</a>
            </li>
            <li>
              <a href="#">New Releases</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">TMDB API</a>
            </li>
            <li>
              <a href="#">Github Repo</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Email: vivekj8800@gmail.com</li>
            <li>Phone: +91-9407857477</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Movie Explorer • Built by Mukesh</p>
      </div>
    </footer>
  );
}
