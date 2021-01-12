import React, { Component } from "react";
import classnames from "classnames";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      isError: false,
    };
  }

  handleChange = (e) => {
    // bat dau = 097
    // <= 10

    if (e.target.value.startsWith("097") && e.target.value.length === 10) {
      this.setState({ isError: false });
    } else {
      this.setState({ isError: true });
    }
  };

  //handleFocus, handleBlur

  handleFocus = () => {
    this.setState({ isFocus: true });
  };

  handleBlur = () => {
    this.setState({ isFocus: false });
  };

  render() {
    console.log({
      isFocus: this.state.isFocus,
    });
    return (
      <div className="container">
        <div
          className={classnames("search-box", {
            error: this.state.isError, // ket qua mong muon la true | false
          })}
        >
          <input
            type="text"
            placeholder="Search something..."
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {!this.state.isFocus && (
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBox;
