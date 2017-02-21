import React, { Component } from 'react';
import TextLane from './CardLanes/TextLane/TextLane.js';
import ProgressLane from './CardLanes/ProgressLane/ProgressLane.js';
import UserLane from './CardLanes/UserLane/UserLane.js';

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
          <p>{this.state.issueDescription}</p>
          <a href={this.branch.getJiraLink()} className="white-text" target="_blank">
            #{this.state.issueNumber}
          </a>
        </span>
      );
    }
    else {
      return this.state.branchName;
    }
  }

  getColorBasedOnLatestBuild() {
    if(!this.branch.didTravisRun()) {
      return "grey darken-2";
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
      return "grey darken-2";
    }
    else if(this.branch.doesPassQualityGate()) {
      return "green darken-3";
    }
    else {
      return "deep-orange darken-3";
    }
  }

  render() {
    return (
      <div className="branch-card col s2" key={this.branch.getName()} >
        <div className={`card small horizontal hoverable ${this.getColorBasedOnLatestBuild()}`}>
          <div className="card-content white-text">
            <span className="card-title">{this.getTitleForCard()}</span>
            <div className="status-lanes">
              <TextLane value={`</> ${this.branch.getNiceSonarqubeString()}`} color={this.getColorBasedOnQualityGate()} />
              <ProgressLane value={this.branch.getCoverage()} valueText={this.branch.getNiceCoverage()} changeText={this.branch.getNiceCoverageChange()} showLabels={false} />
              <UserLane username={this.branch.getLatestCommitter()} lastCommitTime={this.branch.getLastCommitTimeAsString()} avatarUrl={this.branch.getLatestCommitterAvatarUrl()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BranchCard;
