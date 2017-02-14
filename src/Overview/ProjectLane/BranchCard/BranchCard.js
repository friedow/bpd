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
      return <span><a href={this.branch.getJiraLink()} className="white-text" target="_blank">#{this.state.issueNumber}</a><br />{this.state.issueDescription}</span>;
    }
    else {
      return this.state.branchName;
    }
  }

  getColorBasedOnLatestBuild() {
    if(!this.branch.didTravisRun()) {
      return "blue-grey";
    }
    if(this.branch.didLatestBuildPass()) {
      return "green darken-3";
    }
    return "deep-orange darken-3";
  }

  getColorBasedOnQualityGate() {
    if(!this.branch.didSonarqubeRun()) {
      return "blue-grey";
    }
    if(this.branch.doesPassQualityGate()) {
      return "green darken-3";
    }
    return "deep-orange darken-3";
  }
  getFooterForCard() {
    var footerText = "</> " + this.branch.getNiceSonarqubeString();
    return (
      <div className={`card-action ${this.getColorBasedOnQualityGate()}`}>
        {footerText}
      </div>
    );
  }

  render() {
    return (
      <div className={`card small horizontal ${this.getColorBasedOnLatestBuild()}`}>
        <div className="card-content white-text">
          <span className="card-title">{this.getTitleForCard()}</span>
          {this.branch.getLastCommitTimeAsString()}
          {this.getFooterForCard()}
        </div>
      </div>
    );
  }

}

export default BranchCard;
