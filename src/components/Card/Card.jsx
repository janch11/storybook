import React from "react";
import "./Card.scss";
import winter from "assets/winter.jpg";

export const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={winter} />
      <div className="card-content">
        <h3 className="card__title">Lorem ipsum dolor</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto rem
          beatae voluptas iure fuga assumenda nemo expedita quibusdam error.
        </p>
        <p className="card__price-description">Room starting at</p>
        <p className="card__price">106€</p>
        <button className="card__button">Find out more</button>
      </div>
    </div>
  );
};
