import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [useAvatar, setUserAvatar] = React.useState('');
  const [userID, setUserId] = React.useState([])
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUser().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
      setUserId(data._id);
    })
      .catch(err => console.log(err.message));

    api.getCards().then(
      cards => setCards(cards))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <main className="content page__content" >
      <article className="profile" >
        <div className="profile__card">
          <div className="profile__avatar-container">
            <img src={useAvatar} alt="Путешественник"
              className="avatar profile__avatar"
              onClick={onEditAvatar} />
          </div>
          <div className="profile__content-wrapper">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{userName}</h1>
              <p className="subtitle profile__subtitle">{userDescription}</p>
            </div>
            <button className="button edit-button profile__edit-button" type="button"
              aria-label="Редактировать данные пользователя"
              onClick={onEditProfile} ></button>
          </div>
          <button className="button profile__add-button" type="button" aria-label="Добавить пользователя"
            onClick={onAddPlace} ></button>
        </div>
        <section className="places profile__places">
          <ul className="places__items">
            {
              cards.map(card => {
                return (<Card card={card} key={card._id} onClick={onCardClick} currentUserId={userID} />)
              })
            }
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Main;
