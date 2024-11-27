import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/add-data" className="nav__link">
              Add Data
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
