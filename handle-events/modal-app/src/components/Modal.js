import React, { Component } from "react";
import { Button } from "reactstrap";
import classnames from "classnames";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;

    return (
      <div
        className={classnames("custom-modal", {
          open: isOpen,
        })}
      >
        <div className="main">
          <div className="header">
            <i className="fas fa-times" onClick={onClose}></i>
          </div>

          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="footer">
            <Button onClick={onClose} color="success" className="mr-3">
              Accept
            </Button>
            <Button onClick={onClose} color="danger">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
