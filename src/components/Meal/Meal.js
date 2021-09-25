import React from 'react';
import "./Meal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Meal = (props) => {
  const {strMeal, strMealThumb, strCategory} = props.meal
  return (
    <div className="col-md-4 meal">
      <div className="image">
      <img className="img-fluid" src={strMealThumb} alt="" />
      </div>
      <h2>{strMeal}</h2>
      <p>{strCategory}</p>
      <button onClick={() => props.orderFood(strMeal)} className="btn btn-dark">Order Now <FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  );
};

export default Meal;