import React, { Component } from 'react';

class WordTable extends Component {
  render() {
    const list = (this.props.wordList)
    this.tableItems = Object.keys(list).map((key) => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{list[key]}</td>
        </tr>
      )
    });
    return (
      <table className="word-table">
        <thead>
          <tr>
            <th className="word-table-heading" colSpan="2">Review Word Count</th>
          </tr>
        </thead>
        <tbody>
          {this.tableItems}
        </tbody>
      </table>
    );
  }
}

export default WordTable;
