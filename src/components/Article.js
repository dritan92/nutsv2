import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';


export default (props) => {
  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src = {props.image} alt="" />
      </span>
      <p>
        {props.body}
      </p>
      <p>
        {props.description}
      </p>
      <p description = {props.description} />
        <div>

          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span></span>}
            starCount={5}
            value={1}
          />
        </div>
    </article>

  )
}
