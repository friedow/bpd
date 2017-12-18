import Repository from '../Repository.js';

test('Test Repository.getMostRecentBranches fulfilling CACC', () => {
    let branchX = { name: 'BranchX' };
    let branchY = { name: 'BranchY' };
    Repository.prototype.updateListOfBranches = function() {};
    Repository.prototype.getBranches = function() { return [branchX, branchY]; };
    const repo = new Repository('bpd', 'friedow', 'test');

    // Test case Row 2
    branchX.isDeveloperBranch = function() { return true; };
    branchX.getLastCommitTime = function() { return 1513436019; };
    branchY.isDeveloperBranch = function() { return false; };
    branchY.getLastCommitTime = function() { return 1507814110; };
    expect(repo.getMostRecentBranches()).toEqual([branchY]);

    // Test case Row 3
    branchX.isDeveloperBranch = function() { return false; };
    branchX.getLastCommitTime = function() { return 1513436019; };
    branchY.isDeveloperBranch = function() { return true; };
    branchY.getLastCommitTime = function() { return 1507814110; };
    expect(repo.getMostRecentBranches()).toEqual([branchX]);

    // Test case Row 4
    branchX.isDeveloperBranch = function() { return false; };
    branchX.getLastCommitTime = function() { return 1513436019; };
    branchY.isDeveloperBranch = function() { return false; };
    branchY.getLastCommitTime = function() { return 1507814110; };
    expect(repo.getMostRecentBranches()).toEqual([branchX, branchY]);

    // Test case Row 8
    branchX.isDeveloperBranch = function() { return false; };
    branchX.getLastCommitTime = function() { return 1507814110; };
    branchY.isDeveloperBranch = function() { return false; };
    branchY.getLastCommitTime = function() { return 1513436019; };
    expect(repo.getMostRecentBranches()).toEqual([branchY, branchX]);
    
});

