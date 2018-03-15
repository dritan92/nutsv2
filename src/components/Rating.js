import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';


class Rating extends Component {
  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span></span>}
          starCount={10}
          value={1}
        />
      </div>
    );
  }
}
