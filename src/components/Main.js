import React from 'react';

import avatar from '../images/profile/Avatar.jpg'


function Main({ onEditProfile, onAddPlace, onEditAvatar }) {


  return (
    <>
      <main className="content page__content" >
        <article className="profile" >
          <div className="profile__card">
            <div className="profile__avatar-container">
              <img src={avatar} alt="Путешественник"
                className="avatar profile__avatar"
                onClick={onEditAvatar} />
            </div>
            <div className="profile__content-wrapper">
              <div className="profile__title-wrapper">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <p className="subtitle profile__subtitle">Исследователь океана</p>
              </div>
              <button className="button edit-button profile__edit-button" type="button"
                aria-label="Редактировать данные пользователя"
                onClick={onEditProfile} ></button>
            </div>
            <button className="button profile__add-button" type="button" aria-label="Добавить пользователя"
              onClick={onAddPlace} ></button>
          </div>
          <section className="places profile__places">
            <ul className="places__items"></ul>
          </section>
        </article>
        <template id="cardtemplate">
          <li className="places__item">
            <button className="button places__delete-button" type="button"></button>
            <img src="#" alt="#" className="places__image" />
            <div className="text-content places__text-content">
              <h2 className="title places__title"></h2>
              <div className="places__like-block">
                <button type="button" className="button places__like-button" aria-label="Нравится"></button>
                <p className="places__likes-counter">0</p>
              </div>


            </div>
          </li>
        </template>
      </main>
    </>
  );
}

export default Main;
