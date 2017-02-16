import React, { Component } from 'react';
import './ProgressLane.css';

class ProgressLane extends Component {
  constructor(props) {
    super(props);
    let value = 0;
    if(this.props.value) {
      value = this.props.value;
    }
    this.state = {baseColor: 'teal lighten-2',
        progressColor: 'teal',
        valueText: ' ',
        changeText: ' ',
        value: value};
  }
  componentDidMount() {
    if(this.props.baseColor) {
      this.setState({baseColor: this.props.baseColor});
    }
    if(this.props.progressColor) {
      this.setState({progressColor: this.props.progressColor});
    }
    if(this.props.valueText) {
      this.setState({valueText: this.props.valueText});
    }
    if(this.props.changeText) {
      this.setState({changeText: this.props.changeText});
    }
  }


  render() {
    // <div className={`progress-card-lane-bar z-depth-2 ${this.state.progressColor}`} style={{flex: `0 0 ${this.state.value}%`}}>{this.state.valueText}</div>
    // <div className={`progress-card-lane-base  ${this.state.baseColor}`}>{this.state.changeText}</div>

    return (
      <div className="card-lane progress-card-lane " >
        
        <div className={`progress-card-lane-bar z-depth-2 ${this.state.progressColor}`} style={{flex: `0 0 ${this.state.value}%`}}></div>
        <div className={`progress-card-lane-base  ${this.state.baseColor}`} style={{flex: `1 0`}}></div>
      </div>
    );
  }

}

export default ProgressLane;
