import React, { Component } from 'react';

class UserLane extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.username,
        lastCommitTime: this.props.lastCommitTime,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Blank.png"};
  }
  componentDidMount() {
    if(this.props.avatarUrl) {
      this.setState({avatarUrl: this.props.avatarUrl});
    }
  }

  render() {
    return (
      <div className="card-lane user-card-lane grey darken-3">
        <img className="user-image" src={this.state.avatarUrl} />
        <p className="user-name">
          {this.state.username}
        </p>
        <p className="last-committed">
          {this.state.lastCommitTime}
        </p>
      </div>
    );
  }
}

export default UserLane;
