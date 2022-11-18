import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {




  const { currentUser } = React.useContext(CurrentUserContext);





  return (
    <main className="content page__content" >
      <article className="profile" >
        <div className="profile__card">
          <div className="profile__avatar-container">
            <img src={currentUser.avatar} alt="Путешественник"
              className="avatar profile__avatar"
              onClick={onEditAvatar} />
          </div>
          <div className="profile__content-wrapper">
            <div className="profile__title-wrapper">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="subtitle profile__subtitle">{currentUser.about}</p>
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

                return (<Card card={card} key={card._id}
                  onClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />)
              })
            }
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Main;
