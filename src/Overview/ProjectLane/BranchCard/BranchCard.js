import React, { Component } from 'react';
import './BranchCard.css';

class BranchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {branchName: this.props.branch.getName()};
    this.branch = this.props.branch;
  }
  componentDidMount() {
    if(this.branch.isIssueExtractable()) {
      this.setState({issueNumber: this.branch.getIssueNumber(), issueDescription: this.branch.getIssueName()});
    }
  }

  getTitleForCard() {
    if (this.state.issueNumber && this.state.issueDescription) {
      return <span><a href={this.branch.getJiraLink()} className="white-text">#{this.state.issueNumber}</a><br />{this.state.issueDescription}</span>;
    }
    else {
      return this.state.branchName;
    }
  }

  getColorBasedOnLatestBuild() {
    if(this.branch.didLatestBuildPass()) {
      return "green darken-3";
    }
    return "orange darken-4";
  }

  render() {
    return (
      <div className={`card small horizontal ${this.getColorBasedOnLatestBuild()}`}>
        <div className="card-content white-text">
          <span className="card-title">{this.getTitleForCard()}</span>
          {this.branch.getLastCommitTimeAsString()}
          <div className="card-action">
            <a href={this.branch.getJiraLink}>Open in Jira</a>
          </div>
        </div>
      </div>
    );
  }

}

export default BranchCard;
