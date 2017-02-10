import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.projects);
    const listItems = this.props.projects.map((project) =>
      <a href="#!" className="collection-item" key={project["id"]}>
        <span className="badge">{project["id"]}</span>
        {project["nm"]}
      </a>
    );
    return (
      <div>
        <h3>List of projects</h3>
        <div className="collection">
          {listItems}
        </div>
      </div>
    );
  }
}

export default Overview;
