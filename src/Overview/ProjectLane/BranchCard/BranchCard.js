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
      return (
        <span>
          <a href={this.branch.getJiraLink()} className="white-text" target="_blank">
            #{this.state.issueNumber}
          </a>
          <br />
          {this.state.issueDescription}
        </span>
      );
    }
    else {
      return this.state.branchName;
    }
  }

  getColorBasedOnLatestBuild() {
    if(!this.branch.didTravisRun()) {
      return "blue-grey";
    }
    else if(this.branch.didLatestBuildPass()) {
      return "green darken-3";
    }
    else {
      return "deep-orange darken-3";
    }
  }

  getColorBasedOnQualityGate() {
    if(!this.branch.didSonarqubeRun()) {
      return "blue-grey";
    }
    else if(this.branch.doesPassQualityGate()) {
      return "green darken-3";
    }
    else {
      return "deep-orange darken-3";
    }
  }

  displayCoverage() {
    if(this.branch.hasCoverage()) {
      return " | " + this.branch.getCoverage() + " %";
    }
    return "";
  }

  render() {
    return (
      <div className="col s2" key={this.branch.getName()} >
        <div className={`card small horizontal ${this.getColorBasedOnLatestBuild()}`}>
          <div className="card-content white-text">
            <span className="card-title">{this.getTitleForCard()}</span>
            {this.branch.getLastCommitTimeAsString()}
            <br />
            <div className={`card-action ${this.getColorBasedOnQualityGate()}`}>
                {`</> ${this.branch.getNiceSonarqubeString()} ${this.displayCoverage()}`}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BranchCard;
