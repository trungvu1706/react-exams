import React, { Component } from "react";
import Friend from "./Friend";
import "./style.css";

class FriendList extends Component {
  render() {
    return (
      <div className="friend-list">
        {this.props.friends.map((friend, index) => (
          <Friend friend={friend} key={index} />
        ))}
      </div>
    );
  }
}

export default FriendList;
