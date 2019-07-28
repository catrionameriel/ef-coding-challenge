import React, { Component } from 'react';

class WordList extends Component {
  render() {
    const list = (this.props.wordList)
    const tableItems = Object.keys(list).map((key) => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{list[key]}</td>
        </tr>
      )
    });
    return tableItems;
  }
}

export default WordList;
