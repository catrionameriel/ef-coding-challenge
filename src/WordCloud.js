import React, { Component } from 'react';
import ReviewData from './data/reviews.json'

class WordCloud extends Component {

  showReviews = (reviews) => {
    return reviews.map((review, index) => <li key={index}>{review}</li>);
  }

  render() {
    return (
      <ul>
        { this.showReviews(ReviewData.reviews) }
      </ul>
    )
  }
}

export default WordCloud;
