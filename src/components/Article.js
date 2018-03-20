import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Rating from './Rating'
import ContactForm from './ContactForm'



export default (props) => {
  {/* If the article is review then add the rating component */}
  let componentAdd;
  if (props.id == "review") {
    componentAdd = (
      <div>
        <Rating />
      </div>
    )
  }
  else if (props.id == "contact") {
    componentAdd = (
      <div>
        <ContactForm />
      </div>
    )
  }

  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src = {props.image} alt="" />
      </span>
      <h4>
        {props.body}
      </h4>
      <div>
        {props.description}
      </div>
      {componentAdd}
    </article>

  )
}
