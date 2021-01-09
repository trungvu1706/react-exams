import React, { Component } from "react";
import RecommendedFriends from "./components/RecommendedFriend";
import "./App.css";

class App extends Component {
  render() {
    const friendLists = [
      {
        name: "Phong0908",
        avatar: "../images/avatar.png",
        recommend: "Recommend for you",
        follow: "Follow",
      },
      {
        name: "Phong0908",
        avatar: "../images/avatar.png",
        recommend: "Recommend for you",
        follow: "Follow",
      },
      {
        name: "Phong0908",
        avatar: "../images/avatar.png",
        recommend: "Recommend for you",
        follow: "Follow",
      },
    ];
    return (
      <div className="App">
        <div className="header">
          <h3>Recommend for you</h3>
          <h5> See All</h5>
        </div>

        <RecommendedFriends friends={friendLists} />
      </div>
    );
  }
}

export default App;
