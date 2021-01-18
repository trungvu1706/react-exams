import React, { Component } from "react";
import "./style.css";

import PropTypes from "prop-types";

class Friend extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div className="friend">
        <div className="main">
          <img src={friend.avatar} alt="avatar" />
          <div className="content">
            <p>{friend.name}</p>
            <p>{friend.recommend}</p>
          </div>
        </div>
      </div>
    );
  }
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    recommend: PropTypes.string,
  }),
};

export default Friend;
