import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className="card-container">
      <div className="cardR u-clearfix">
        <div className="card-bodyR">
          <span className="card-number card-circle subtle">01</span>
          <span className="card-author subtle">John Smith</span>
          <h2 className="card-title">New Brunch Recipe</h2>
          <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
          <div className="card-read">Read</div>
          <span className="card-tag card-circle subtle">C</span>
        </div>
        <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" className="card-media" />
      </div>
    </div>


  )
}

export default Card