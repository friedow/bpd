import React, { Component } from 'react';
import './UserLane.css';

class UserLane extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.username,
        avatarUrl: ""};
  }
  componentDidMount() {
    if(this.props.avatarUrl) {
      this.setState({avatarUrl: this.props.avatarUrl});
    }
  }

  render() {
    return (
      <div className="card-lane user-card-lane">
        <div className="chip"><img src={this.state.avatarUrl} alt="Contact Person" />{this.state.username}</div>
      </div>
    );
  }
}

export default UserLane;
