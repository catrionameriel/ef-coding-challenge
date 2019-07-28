import React, { Component } from 'react';

class WordList extends Component {
  render() {
    const list = (this.props.wordList)
    this.items = Object.keys(list).map((key) => {
      return (
        <span key={key}>
          <p className={this.getClassNames(list[key])}>{key}</p>
        </span>
      )
    });
    return this.items;
  }

  getClassNames = (textSize) => {
    return `${this.assignRandomColor()} ${this.getTextSize(textSize)}`;
  }

  assignRandomColor = () => {
    const colours = ['blue', 'green', 'red', 'orange'];
    const index = this.getRandomNumber(4);
    return `${colours[index]}-text`;
  }

  getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  }

  getTextSize(textSize) {
    const size = ['small', 'medium', 'large', 'extra-large'];
    return(`${size[textSize - 1]}-text`);
  }
}

export default WordList;
