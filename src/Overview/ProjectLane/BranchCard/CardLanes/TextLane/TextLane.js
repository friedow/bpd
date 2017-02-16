import React, { Component } from 'react';
import './TextLane.css';

class TextLane extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.value};
  }
  componentDidMount() {

  }


  render() {
    return (
      <div className={`card-lane ${this.props.color}`}>
        {this.state.text}
      </div>
    );
  }

}

export default TextLane;
