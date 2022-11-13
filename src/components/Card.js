import React from "react";
import { cardsContainer } from "../utils/utils";

function Card(props) {

  const handleClick = () => {
    props.onClick(props.card);
  }

  return (
    <li className="places__item">
      <button className="button places__delete-button" type="button"></button>
      <img src={props.card.link} alt={props.card.name} className="places__image" onClick={handleClick} />
      <div className="text-content places__text-content">
        <h2 className="title places__title">{props.card.name}</h2>
        <div className="places__like-block">
          <button type="button" className="button places__like-button" aria-label="Нравится"></button>
          <p className="places__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card
