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

  getColorBasedOnQualityGate() {
    if(this.branch.doesPassQualityGate()) {
      return "green";
    }
    return "deep-orange";
  }

  render() {
    return (
      <div className={`card small horizontal ${this.getColorBasedOnQualityGate()} darken-1`}>
        <div className="card-content white-text">
          <span className="card-title">{this.getTitleForCard()}</span>
          {this.props.branch.getLastExecutionTime()}
          <div className="card-action">
            <a href={this.branch.getJiraLink}>Open in Jira</a>
          </div>
        </div>
      </div>
    );
  }

}

export default BranchCard;
