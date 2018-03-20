import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import styles from '../styles/slidetext.css';


export default class Rating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating: nextValue});
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_custom_icon: nextValue});
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    // console.log(e);
    this.setState({rating_half_star: nextValue});
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_empty_initial: nextValue});
  }

  render() {
    return (
    [ <div style={{paddingBottom: 195, paddingTop: 30}}>

        <p class="item-1"><blockquote>The most delicious walnuts ever...</blockquote></p>
        <p class="item-2"><blockquote>Our office has been gifted Australian Premier nuts for a few years, and each year, that tin of nuts is our collective favorite holiday treat. Plus, eating a handful of nuts (and chocolate) doesnt make us feel quite as guilty as eating a slice of pie.</blockquote></p>
        <p class="item-3"><blockquote>Enjoying your wonderful walnuts. ..which I purchased @Humpty Doo Vintage Cars event😊😊...yummO.</blockquote></p>
      </div>
      ,
     <hr/>,
      <div style={{marginLeft: 20}}>
        <h5>Please give your rating</h5>
        <div style={{fontSize: 24, }}>
          <StarRatingComponent name="app1" />
        </div>

      {/*
        <h3>Editable with handlers (Rating from state is {this.state.rating}):</h3>
        <div style={{fontSize: 26}}>
          <StarRatingComponent
            name="app2"
            starCount={8}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)} />
        </div>

        <h3>Editable (with custom icons):</h3>
        <div style={{fontSize: 20}}>
          <StarRatingComponent
            name="app3"
            starCount={10}
            value={this.state.rating_custom_icon}
            onStarClick={this.onStarClickCustomIcon.bind(this)}
            starColor="#f00"
            renderStarIcon={() => <span><img src= "../images/walnut.png"/></span>} />
        </div>

        <h3>Non-Editable:</h3>
        <div style={{fontSize: 18}}>
          <StarRatingComponent
            name="app4"
            editing={false}
            starCount={10}
            value={8} />
        </div>

        <h3>Editable (with 0 initial value):</h3>
        <div style={{fontSize: 24}}>
          <StarRatingComponent
            name="app5"
            value={this.state.rating_empty_initial}
            onStarClick={this.onStarClickEmptyInitial.bind(this)} />
        </div>
      */}
      </div>]
    );
  }
}
