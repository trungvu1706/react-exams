import React, { useContext } from "react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

import { BookContext } from "../../contextApis/Context";

function Nav() {
  const { cart } = useContext(BookContext);
  return (
    <div className={cls.Nav}>
      <ul className={cls.Nav_link}>
        <Link to="/book">
          <li>Book</li>
        </Link>

        <Link to="/user">
          <li>User</li>
        </Link>

        <Link to="/cart">
          <li>Cart ({cart.length}) </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
