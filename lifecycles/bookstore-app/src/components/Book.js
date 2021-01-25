import React, { Component } from "react";
import "./style.css";
// import { Table } from "reactstrap";
import { Table } from "antd";

const columns = [
  { title: "Number", dataIndex: "number", key: "number" },
  { title: "Title", dataIndex: "title", key: "title" },
  {
    title: "Information",
    dataIndex: "information",
    key: "information",
    render: () => <a href="#2">View</a>,
  },
  {
    title: "Cart",
    dataIndex: "cart",
    key: "cart",
    render: () => <a href="#2">Delete</a>,
  },
];

class Book extends Component {
  render() {
    const dataSource = this.props.books.map((book, index) => {
      return {
        key: index,
        title: book.title,
        number: index + 1,
      };
    });
    return (
      <div className="book">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    );
  }
}

export default Book;
