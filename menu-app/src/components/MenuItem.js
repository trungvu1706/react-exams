import React, { Component } from "react";
import "../App.css";

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item">
        <img alt="icon" src={this.props.item.icon} />
        <p>{this.props.item.label}</p>
      </div>
    );
  }
}

export default MenuItem;
