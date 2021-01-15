import React, { Component } from "react";
import Modal from "./components/Modal";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Modal isOpen={this.state.isOpenModal} onClose={this.handleCloseModal}>
          <div className="Modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Modal>

        {/* goi onClick truyen vao button de mo modal */}
        <button onClick={this.handleOpenModal} className="btn-show-modal">
          Show modal
        </button>
      </div>
    );
  }
}

export default App;
