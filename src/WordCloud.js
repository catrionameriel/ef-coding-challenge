import React, { Component } from 'react';
import WordList from './WordList';
import ReviewData from './data/reviews.json'
import Blacklist from './data/blacklist.json'

class WordCloud extends Component {
  render() {
    const wordList = this.calculateWordFrequencyIn(ReviewData.reviews);
    return (
      <div className="word-cloud">
          <WordList wordList={wordList}/>
      </div>
    );
  }

  calculateWordFrequencyIn = (reviews) => {
    const seperatedWords = this.createStringArrayFrom(reviews);
    const filteredOutSmallWordsList = this.filterOutSmallWordsFrom(seperatedWords);
    const filteredOutBlackListWords = this.filterOutBlacklistWordsFrom(filteredOutSmallWordsList, Blacklist.blacklist);
    return this.countWordsIn(filteredOutBlackListWords);
  }

  createStringArrayFrom = (array) => {
    const string = this.removePunctuationFrom(array.join());
    return string.split(' ');
  }

  removePunctuationFrom = (string) => {
    const newString = string.replace(/[.,/!$%&*;:'-()0-9]/g, ' ');
    return newString.toLowerCase();
  }

  filterOutSmallWordsFrom = (array) => {
    return array.filter(word => word.length > 2)
  }

  filterOutBlacklistWordsFrom = (array, blacklist) => {
     array = array.filter((word) => {
      return !blacklist.includes(word);
    });
    return array;
  }

  countWordsIn = (array) => {
    const list = {};
    array.forEach((word) => {
      if (!list[word]) {
        list[word] = 1;
      } else {
        list[word] += 1;
      }
    });
    return list;
  }
}

export default WordCloud;
