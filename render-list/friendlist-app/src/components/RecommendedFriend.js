import React, { Component } from "react";
import FollowFriendLists from "./FollowFriendLists";
import "../App.css";

class RecommendedFriends extends Component {
  render() {
    return (
      <div className="friend-lists">
        <span>
          {this.props.friends.map((friend, index) => (
            <FollowFriendLists friend={friend} key={index} />
          ))}
        </span>
      </div>
    );
  }
}

export default RecommendedFriends;
