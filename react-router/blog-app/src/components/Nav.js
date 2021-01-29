import React from "react";
import "../asset/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>Logo</h1>
      <ul className="Nav-link">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
