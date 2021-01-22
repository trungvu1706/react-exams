import React, { Component } from "react";
import "./style.css";
import { Table } from "reactstrap";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <Table dark>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Information</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map((book, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{book.title}</td>
                <td>View</td>
                <td>Add</td>
              </tr>
            ))}

            <tr></tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Book;
