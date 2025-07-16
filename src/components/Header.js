import React from "react";

const Header = ({ onNavigateHome }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={onNavigateHome}>
          <h1>🎬 Movie Explorer</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
