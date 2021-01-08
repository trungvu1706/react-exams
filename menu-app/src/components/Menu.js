import React, { Component } from "react";
import "../App.css";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.items.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    );
  }
}

export default Menu;
