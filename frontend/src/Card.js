// frontend/src/Card.js
import React from 'react';
import './Card.css'; // We will add simple styles later

// Using props to receive data
const Card = ({ name, price, description }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <p className="desc">{description}</p>
    </div>
  );
};

export default Card;