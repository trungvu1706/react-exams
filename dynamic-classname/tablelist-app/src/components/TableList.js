import React, { Component } from "react";
import { Table } from "reactstrap";
import classNames from "classnames";
import "../App.css";

class TableList extends Component {
  render() {
    return (
      <div className="table-list">
        <Table className="table">
          <thead>
            <tr className="table-row">
              <th>#</th>
              <th>First </th>
              <th>Last </th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lists.map((user, index) => (
              <tr
                key={index}
                className={classNames("table-row", {
                  "table-even-row": index % 2 === 0,
                })}
              >
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.handle}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableList;
