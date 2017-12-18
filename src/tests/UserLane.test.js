import React from 'react';
import UserLane from '../Overview/ProjectLane/BranchCard/CardLanes/UserLane/UserLane.js';
import renderer from 'react-test-renderer';

it('UserLane renders correctly', () => {
    const tree = renderer
        .create(<UserLane
            username="John Doe"
            lastCommitTime="23:59"
            avatarUrl="http://pictures-of-john-doe.com/profile.png"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

