import React, { Component } from 'react';
import BranchCard from './BranchCard/BranchCard.js';
import Repository from '../../Repository.js';

class ProjectLane extends Component {
    constructor(props) {
        super(props);
        this.state = {branches: []};
        this.repository = new Repository(this.props.repository.split("/")[1], this.props.repository.split("/")[0], this.props.apiClients);
    }
    componentDidMount() {
        this.updateBranches();
        this.timerID = setInterval(
            () => this.updateBranches(),
            120000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateBranches() {
        let shownBranches = this.repository.getMostRecentBranchesWithDev(6);
        this.setState({branches: shownBranches});
    }


    render() {
        return (
            <div className="project-lane">
                <div className="row">
                    <div className="col s12">
                        <div className="card small grey lighten-3">
                            <div className="card-content white-text">
                                <span className="card-title grey-text text-darken-3">{this.props.repository.split("/")[1]}</span>
                                {this.state.branches.map((branch, index) =>
                                    <BranchCard key={index} branch={branch}/>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectLane;
