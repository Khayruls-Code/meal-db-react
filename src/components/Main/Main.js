import React, { useEffect, useState } from 'react';
import { addToLocal, getList } from '../../fakeDb/storage';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';

const Main = () => {
  //looding meal
  const [meals, setMeals] = useState([])
  //add meal to cart
  const [cart, setcart] = useState([])
  //search state
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals)
        setSearchItem(data.meals)
      })
  }, [])

  //click handaler on meal button

  const orderFood = (meal) => {
    const selectedList = [...cart, meal]
    setcart(selectedList)
    addToLocal(meal)
  }

  //search meal

  const searchMeal = (event) => {
    const searchText = event.target.value;
    const metchedProduct = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
    setSearchItem(metchedProduct)
  }

  //add meal form local to ui

  useEffect(() => {
    const list = getList()
    setcart(list)
  }, [meals])

  return (
    <div>
      <div className="search-box">
        <input onChange={searchMeal} className="form-control w-50 m-auto my-3" type="text" placeholder="Search Your spacial food..."/>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {
                searchItem.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                orderFood={orderFood}
                />)
              }
            </div>
          </div>
          <div className="col-md-4">
            <Order
            cart={cart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;