import React, { Component } from 'react';
import WordList from '../WordList';
import WordTable from '../WordTable';
import ReviewData from '../../data/reviews.json'
import Blacklist from '../../data/blacklist.json'
import { calculateWordFrequency } from './buildWordList';

class WordCloud extends Component {
  render() {
    const wordList = calculateWordFrequency(ReviewData.reviews, Blacklist.blacklist);
    return (
      <div className="word-cloud">
          <WordList wordList={wordList}/>
          <WordTable wordList={wordList}/>
      </div>
    );
  }
}

export default WordCloud;
