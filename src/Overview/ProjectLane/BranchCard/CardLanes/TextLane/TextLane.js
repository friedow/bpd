import React, { Component } from 'react';
import './TextLane.css';

class TextLane extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.text};
  }
  componentDidMount() {

  }


  render() {
    return (
      <div className="cardlane">
        {this.state.text}
      </div>
    );
  }

}

export default TextLane;
