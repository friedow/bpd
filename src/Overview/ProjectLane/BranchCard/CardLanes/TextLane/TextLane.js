import React, { Component } from 'react';
import './TextLane.css';

class TextLane extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.value,
        backgroundColor: "",
        textColor: ""};
  }
  componentDidMount() {
    if(this.props.color) {
      this.setState({backgroundColor: this.props.color});
    }
    if(this.props.textColor) {
      this.setState({textColor: this.props.textColor});
    }
  }
  getStyle() {
    if(this.props.italic) {
      return {fontStyle: 'italic'};
    }
    return {};
  }

  render() {
    return (
      <div className={`card-lane text-card-lane ${this.state.backgroundColor} ${this.state.textColor}`} style={this.getStyle()}>
        {this.state.text}
      </div>
    );
  }
}

export default TextLane;
