import React from 'react';

class RandomColor extends Component {
  state = {
    lastColor: '',
    color: 'black',
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
    const color = this.getColor();
  }
}
