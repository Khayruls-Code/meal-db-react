import React from 'react';
import "./Order.css"

const Order = (props) => {
  return (
    <div className="cart">
      <h2>Item Ordered: {props.cart.length}</h2>
      <ul>
        {
          
          props.cart.map(item => <li key={item + (Math.random() * 10000)}>{item}</li>)
        }
      </ul>
    </div>
  );
};

export default Order;