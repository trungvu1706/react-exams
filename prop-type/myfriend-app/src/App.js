import React, { Component } from "react";
import FriendList from "./components/FriendList";

import "./App.css";

class App extends Component {
  render() {
    const friendLists = [
      {
        name: "Trung",
        avatar: "../img/avatar.png",
        recommend: "recommend for you",
      },
      {
        name: "Khoi",
        avatar: "../img/avatar.png",
        recommend: "recommend for you",
      },
      {
        name: "Huy",
        avatar: "../img/avatar.png",
        recommend: "recommend for you",
      },
    ];
    return (
      <div className="App">
        <FriendList friends={friendLists} />
      </div>
    );
  }
}
export default App;
