import React, { Component } from 'react';
import './TextLane.css';

class TextLane extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.value};
  }
  componentDidMount() {
    if(this.props.color) {
      this.setState({backgroundColor: this.props.color});
    }
    else {
      this.setState({color: ""});
    }
  }

  render() {
    return (
      <div className={`card-lane text-card-lane ${this.state.backgroundColor}`}>
        {this.state.text}
      </div>
    );
  }
}

export default TextLane;
