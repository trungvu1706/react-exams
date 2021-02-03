import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import cls from "./styles.module.scss";
import axios from "axios";

import { Table } from "antd";
import { BookContext } from "../../contextApis/Context";

function Book() {
  const { books, setBooks, addToCart } = useContext(BookContext);

  const columns = [
    { title: "Number", dataIndex: "number", key: "number" },
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Information",
      dataIndex: "information",
      key: "information",
      render: () => <button>View</button>,
    },
    {
      title: "Cart",
      dataIndex: "obj",
      key: "obj",
      render: (book) => (
        <button onClick={() => addToCart(book._id)}>Add</button>
      ),
    },
  ];

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:9999/books");
        console.log(res);
        setBooks(res.data.books);
      } catch (error) {
        console.log("Failed to get data", error.message);
      }
    };
    getBooks();
  }, []);

  const dataSource = books.map((book, index) => {
    return {
      obj: book,
      key: index,
      title: book.title,
      number: index + 1,
    };
  });

  return (
    <div className={cls.Book}>
      <h2>BookStore</h2>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default Book;
