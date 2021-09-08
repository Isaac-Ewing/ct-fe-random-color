import React, { Component } from 'react';
import Display from './Display';

class RandomColor extends Component {
  state = {
    lastColor: 'none',
    color: 'green',
  };

  getColor() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
    ];

    return colors[Math.round(Math.abs(Math.random() * colors.length - 1))];
  }

  handleColorChange() {
    this.setState({ lastColor: this.state.color, color: this.getColor() });
  }

  componentDidMount() {
    setInterval(this.handleColorChange.bind(this), 1000);
  }

  render() {
    return (
      <>
        <Display color={this.state.color} lastColor={this.state.lastColor}></Display>
      </>
    );
  }
}

export default RandomColor;
