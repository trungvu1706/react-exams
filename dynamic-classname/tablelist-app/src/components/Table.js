import React, { Component } from "react";
import TableList from "./TableList";

class Table extends Component {
  render() {
    return (
      <div className="table">
        <TableList lists={this.props.lists} />
      </div>
    );
  }
}

export default Table;
