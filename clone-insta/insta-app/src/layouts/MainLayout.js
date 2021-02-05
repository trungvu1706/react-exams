import React from "react";
import Nav from "../components/Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
