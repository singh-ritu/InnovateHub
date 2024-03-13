import React from "react";
import messageSquare from "../../assets/messageSquare.svg";
import settings from "../../assets/settings.svg";
import search from "../../assets/search.svg";

import "./navbar.styles.css";

function Navbar({ searchTerm, handleChange }) {
  return (
    <>
      <div className="navbar">
        <span className="nav-heading">Products</span>
        <div style={{ display: "flex" }}>
          <div className="input-container">
            <img src={search} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="search for.."
              className="input"
            />
          </div>
          <div className="nav-btn">
            <img src={messageSquare} />
          </div>
          <div className="nav-btn">
            <img src={settings} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
