import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import DeleteButton from './DeleteButton'

function Card(props) {

  const { currentUser } = useContext(CurrentUserContext);

  const handleClick = () => {
    props.onClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  const handleDeleteClick = () => {

    props.onDeleteClick(props.card._id);

    // props.onCardDelete(props.card._id);
  }


  const isLiked = props.card.likes.some(like => like._id === currentUser._id);

  const cardLikeButtonClassName = isLiked ? '_active' : '';

  return (
    <li className="places__item">
      {(currentUser._id === props.card.owner._id) && <DeleteButton onClick={handleDeleteClick} />}
      <img src={props.card.link} alt={props.card.name} className="places__image" onClick={handleClick} />
      <div className="text-content places__text-content">
        <h2 className="title places__title">{props.card.name}</h2>
        <div className="places__like-block">
          <button type="button" className={`button places__like-button  places__like-button${cardLikeButtonClassName}`} onClick={handleLikeClick} aria-label="Нравится"></button>
          <p className="places__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card
