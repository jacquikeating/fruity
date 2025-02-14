import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";

const Header = ({ latestSession }) => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  let role = "none";
  if (isAuthenticated) {
    role = user["https://wall-is-safe.netlify.app/roles"][0];
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__group nav__group--primary">
          <Link to="/" className="nav__site-logo">
            <img src="https://i.imgur.com/GNPU7aE.png"></img>
            <p className="nav__site-name">wall is FRUity</p>
          </Link>

          <ul className="nav__list">
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to={`/report/${latestSession}`} className="nav__link">
                Latest
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/clips" className="nav__link">
                Clips
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/timeline" className="nav__link">
                Timeline
              </Link>
            </li>
            {role === "admin" ? (
              <li className="nav__list-item">
                <Link to="/add-data" className="nav__link">
                  Add Data
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="nav__group nav__group--secondary">
          <ul className="nav__list">
            {isAuthenticated ? (
              <li className="nav__list-item">
                <Link to="/account" className="nav__link nav__link--account">
                  <img src={user.picture} className="nav__avatar" />
                  Account
                </Link>
              </li>
            ) : (
              <li className="nav__list-item">
                <p className="nav__link" onClick={() => loginWithRedirect()}>
                  Login
                </p>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
