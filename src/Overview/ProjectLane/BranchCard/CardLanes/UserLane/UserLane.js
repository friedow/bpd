import React, { Component } from 'react';
import './UserLane.css';

class UserLane extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.username,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Blank.png"};
  }
  componentDidMount() {
    if(this.props.avatarUrl) {
      this.setState({avatarUrl: this.props.avatarUrl});
    }
  }

  render() {
    return (
      <div className="card-lane user-card-lane">
        <div className="chip"><img src={this.state.avatarUrl} />{this.state.username}</div>
      </div>
    );
  }
}

export default UserLane;
