import React, { Component } from "react";
import { Button } from "reactstrap";
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
    console.log("rendering", this.state.isOpenModal);
    return (
      <div className="App">
        <Modal
          isOpen={this.state.isOpenModal} // true | false
          onClose={this.handleCloseModal} // sau khi goi onClose => chi dinh no goi tiep ham handleCloseModal
        />

        <Button onClick={this.handleOpenModal} color="primary">
          Show modal
        </Button>
      </div>
    );
  }
}

export default App;
