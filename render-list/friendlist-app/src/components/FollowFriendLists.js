import React, { Component } from "react";
import "../App.css";

class FollowFriendLists extends Component {
  render() {
    return (
      <div className="follow-friend-list">
        <div className="follow-friend-list-left">
          <img src={this.props.friend.avatar} alt="avatar" />
          <div className="follow-friend-list-right">
            <p>{this.props.friend.name}</p>
            <p>{this.props.friend.recommend}</p>
          </div>
        </div>
        <p>{this.props.friend.follow}</p>
      </div>
    );
  }
}

export default FollowFriendLists;
