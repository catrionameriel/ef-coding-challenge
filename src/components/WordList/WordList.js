import React, { Component } from 'react';
import { getClassNames } from './styleWordCloud';

class WordList extends Component {
  render() {
    const list = (this.props.wordList)
    this.items = Object.keys(list).map((key) => {
      return (
        <p key={key} className={getClassNames(list[key])}>
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
}

export default WordList;
