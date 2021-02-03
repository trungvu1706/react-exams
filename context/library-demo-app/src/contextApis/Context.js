import React, { useState, createContext } from "react";

//initialize context
export const BookContext = createContext();

// store state
export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (bookId) => {
    const book = books.find((book) => book._id === bookId);
    const newCart = [...cart];
    newCart.push(book);
    setCart(newCart);
  };

  const value = {
    books,
    cart,
    setBooks,
    addToCart,
  };

  console.log(cart);

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
};
