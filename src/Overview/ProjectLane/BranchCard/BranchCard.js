import React, { Component } from 'react';
import './BranchCard.css';

class BranchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {branchName: this.props.branchKey.replace(this.props.projectKey + ":", "")};
  }
  render() {
    return (
      <div className="card small horizontal blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.state.branchName}</span>
        </div>
      </div>
    );
  }
}

export default BranchCard;
