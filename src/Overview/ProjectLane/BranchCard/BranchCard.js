import React, { Component } from 'react';
import './BranchCard.css';

class BranchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {branchName: this.props.branchKey.replace(this.props.projectKey + ":", "")};
  }
  componentDidMount() {
    //Try to split up into issue# and description
    const branchPattern = /BP[\-|\_](\d{0,4})[\-|\_](.+)/g;
    const ret = branchPattern.exec(this.state.branchName);
    if(ret){
      this.setState ({issueNumber: ret[1], issueDescription: ret[2]});
    }
  }
  render() {
    return (
      <div className="card small horizontal blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.getTitleForCard()}</span>
          {this.props.lastExecutionTime}
        </div>
      </div>
    );
  }
  getTitleForCard() {
    if (this.state.issueNumber && this.state.issueDescription) {
      return <span>#{this.state.issueNumber}<br />{this.state.issueDescription}</span>;
    }
    else {
      return this.state.branchName;
    }
  }
}

export default BranchCard;
