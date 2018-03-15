import React, {Component} from 'react'

export default (props) => {
  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src={props.image} alt="" />
      </span>
      <p>
        {props.body}
      </p>
      <p>
        {props.description}
      </p>
      <p description = {props.description} />
      <div>
        <table class="table">
        <thead>
          <tr>
            <th>{props.col0title}</th>
            <th>{props.col1title}</th>
            <th>{props.col2title}</th>
            <th>{props.col3title}</th>
            <th>{props.col4title}</th>
            <th>{props.col5title}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{props.col0}</td>
            <td>{props.col1}</td>
            <td>{props.col2}</td>
            <td>{props.col3}</td>
            <td>{props.col4}</td>
            <th>{props.col5title}</th>
          </tr>
        </tbody>
      </table>
    </div>
    </article>

  )
}
