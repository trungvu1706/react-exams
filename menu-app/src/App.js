import React, { Component } from "react";
import "./components/MenuItem";
import "./App.css";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    const menuItems = [
      {
        icon: "https://www.flaticon.com/svg/static/icons/svg/25/25694.svg",
        label: "Home",
      },
      {
        icon: "https://www.flaticon.com/svg/static/icons/svg/324/324687.svg",
        label: "Deals",
      },
      {
        icon: "https://www.flaticon.com/svg/static/icons/svg/568/568717.svg",
        label: "Upload",
      },
      {
        icon: "https://www.flaticon.com/svg/static/icons/svg/633/633652.svg",
        label: "Work",
      },
      {
        icon: "https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg",
        label: "Setting",
      },
    ];

    return (
      <div className="App">
        <Menu items={menuItems} />
      </div>
    );
  }
}

export default App;
