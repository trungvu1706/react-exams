import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="Nav">
      <h1>Logo</h1>
      <ul className="Nav-link">
        <Link to="/books">
          <li>Books</li>
        </Link>

        <Link to="/user">
          <li>Users</li>
        </Link>

        <Link to="/transaction">
          <li>Transaction</li>
        </Link>

        <Link to="/cart">
          <li>Cart(0)</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
