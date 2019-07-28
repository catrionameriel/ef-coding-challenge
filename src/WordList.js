import React, { Component } from 'react';

class WordList extends Component {
  render() {
    const list = (this.props.wordList)
    this.items = Object.keys(list).map((key) => {
      return (
        <p key={key} className={this.getClassNames(list[key])}>
          {key}
        </p>
      )
    });
    return (
      <div className="word-cloud-list">
        {this.items}
      </div>
    );
  }

  getClassNames = (textSize) => {
    return `${this.assignRandomColor()} ${this.getTextSize(textSize)} ${this.assignRandomTextDirection()} ${this.assignRandomSpacing()}`;
  }

  assignRandomColor = () => {
    const colours = ['blue', 'green', 'red', 'orange'];
    const index = this.getRandomNumber(4);
    return `${colours[index]}-text`;
  }

  assignRandomTextDirection = () => {
    const rotation = ['vertical', 'horizantal'];
    const index = this.getRandomNumber(2);
    return `${rotation[index]}-text`;
  }

  assignRandomSpacing = () => {
    const spacing = ['center', 'bottom', 'top']
    const index = this.getRandomNumber(3);
    return `${spacing[index]}-aligned-text`;
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
