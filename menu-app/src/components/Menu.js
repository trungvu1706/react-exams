import React, { Component } from "react";
import "../App.css";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {this.props.items.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    );
  }
}

export default Menu;
