import Branch from './Branch.js';

class Repository {

    constructor(repositoryName, owner, apiClients) {
        this.name = repositoryName;
        this.owner = owner;
        this.apiClients = apiClients;
        this.branches = new Map();
        this.updateListOfBranches();
    }

    /**
     * Fetches all branches from repository and merges new branches into local representation.
     */
    updateListOfBranches() {
        this.updateBranchInfo();    //New branches added below will be updated while creating them.
        const newBranchInfo = this.apiClients["gitHub"].getBranchesForRepository(this.getRepositoryUrl());
        for (let branch of newBranchInfo) {
            if (!this.branches.has(branch["name"])) {
                this.branches.set(
                    branch["name"],
                    new Branch(
                        branch["name"],
                        this.name + "/" + this.owner,
                        this.apiClients));
            }
        }
    }

    /**
     * Triggers update on known branches.
     */
    updateBranchInfo() {
        for (let branch of this.getBranches()) {
            branch.update();
        }
    }

    /**
     * Returns the n-most recently pushed or updated branches.
     * This excludes dev branch.
     *
     * @param n branches will be returned
     */
    getMostRecentBranches(n = 5) {
        let unsortedBranches = this.getBranches().filter( (branch) => {
            return !branch.isDeveloperBranch();
        });
        let sortedBranches = unsortedBranches.sort((branch1, branch2) => {
            return branch2.getLastCommitTime() - branch1.getLastCommitTime();
        });
        return sortedBranches.slice(0, n);
    }

    /**
     * Returns the n-most recently pushed or updated branches.
     * This includes the dev branch, counting towards n.
     *
     * @param n branches will be returned
     */
    getMostRecentBranchesWithDev(n = 5) {
        return [this.getDeveloperBranch()].
            concat(this.getMostRecentBranches(n-1));
    }

    getDeveloperBranch() {
        return this.getBranches().find( (branch) => {
            return branch.isDeveloperBranch();
        });
    }

    getMasterBranch() {
        return this.getBranches().find( (branch) => {
            return branch.isMasterBranch();
        });
    }

    getBranches() {
        if (this.branches.length === 0) {
            return null;
        }
        return [...this.branches.values()];
    }

    getRepositoryUrl() {
        return this.owner + "/" + this.name;
    }
}

export default Repository;
