import React, { Component } from 'react';
import TextLane from './CardLanes/TextLane/TextLane.js';
import ProgressLane from './CardLanes/ProgressLane/ProgressLane.js';
import UserLane from './CardLanes/UserLane/UserLane.js';

class BranchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {branchName: this.props.branch.getName(),
                        branch: this.props.branch};
    }
    componentDidMount() {
        this.extractInformation(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.extractInformation(nextProps);
    }

    extractInformation(props) {
        if (this.state.branchName !== props.branch.getName()) {
            this.setState({branchName: props.branch.getName()});
        }
        if(props.branch.isIssueExtractable()) {
            this.setState({issueNumber: props.branch.getIssueNumber(), issueDescription: props.branch.getIssueName()});
        }
        this.setState({branch: props.branch});
    }

    getTitleForCard() {
        if (this.state.issueNumber && this.state.issueDescription) {
            return (
                <span>
          <p>{this.state.issueDescription}</p>
          <a href={this.state.branch.getJiraLink()} className="white-text" target="_blank">
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
        if(!this.state.branch.didTravisRun()) {
            return "grey darken-2";
        }
        else if(this.state.branch.didLatestBuildPass()) {
            return "green darken-3";
        }
        else {
            return "deep-orange";
        }
    }

    getColorBasedOnQualityGate() {
        if(!this.state.branch.didSonarqubeRun()) {
            return "grey darken-2";
        }
        else if(this.state.branch.doesPassQualityGate()) {
            return "green darken-3";
        }
        else {
            return "deep-orange";
        }
    }

    render() {
        return (
            <div className="branch-card col s2" key={this.state.branchName} >
                <div className={`card small horizontal hoverable ${this.getColorBasedOnLatestBuild()}`}>
                    <div className="card-content white-text">
                        <span className="card-title">{this.getTitleForCard()}</span>
                        <div className="status-lanes">
                            <TextLane value={`</> ${this.state.branch.getNiceSonarqubeString()}`} color={this.getColorBasedOnQualityGate()} />
                            <ProgressLane value={this.state.branch.getCoverage()} valueText={this.state.branch.getNiceCoverage()} changeText={this.state.branch.getNiceCoverageChange()} showLabels={false} />
                            <UserLane username={this.state.branch.getLatestCommitter()} lastCommitTime={this.state.branch.getLastCommitTimeAsString()} avatarUrl={this.state.branch.getLatestCommitterAvatarUrl()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BranchCard;
