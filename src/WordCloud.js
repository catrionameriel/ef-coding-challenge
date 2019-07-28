import React, { Component } from 'react';
import ReviewData from './data/reviews.json'
import Blacklist from './data/blacklist.json'

// Review = Array of strings
// Join all reviews together
// Remove all annoying characters
// Make all lowercase
// make each word a seperate array
// Filter out two letter words
// Filter out words from blacklist
// Create WordCloud object
// Count words

class WordCloud extends Component {

  render() {
    const wordList = this.setup(ReviewData.reviews);
    console.log(wordList);
    return (
      <div>
        Word Cloud
      </div>
      )
  }

  setup = (reviews) => {
    const seperatedWords = this.createStringArrayFrom(reviews);
    const filteredOutSmallWordsList = this.filterOutSmallWordsFrom(seperatedWords);
    const filteredOutBlackListWords = this.filterOutBlacklistWordsFrom(filteredOutSmallWordsList, Blacklist.blacklist);
    return this.countWords(filteredOutBlackListWords);
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

  countWords = (array) => {
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
