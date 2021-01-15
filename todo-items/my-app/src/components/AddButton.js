import React, { Component } from "react";
import "./style.css";

class AddButton extends Component {
  render() {
    return (
      <div className="btn" onClick={this.props.onClickButton}>
        <button className="add-btn">
          <i className="fas fa-plus fa"></i>
        </button>
      </div>
    );
  }
}

export default AddButton;
