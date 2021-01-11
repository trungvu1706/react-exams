import React, { Component, components } from "react";
import "../App.css";

class Notification extends Component {
  render() {
    const hasRead = this.props.hasRead;
    return (
      <div className="ntf">
        <div className="header">
          <div className="sub-header">
            <i class="far fa-bell"></i>
            {hasRead && <div className="red-dot"></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
