import React, { Component } from "react";
import classnames from "classnames";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <div className="modal">
        <div
          className={classnames("custom-modal", {
            showModal: isOpen,
          })}
        >
          <div className="main">
            <div className="header">
              <i className="fas fa-times" onClick={onClose}></i>
            </div>
            <div className="content">
              <header>This is a modal 1</header>
              <p>{this.props.children}</p>
            </div>
            <div className="footer">
              <button className="btn btn-success" onClick={onClose}>
                Accept
              </button>

              <button className="btn btn-alert" onClick={onClose}>
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
