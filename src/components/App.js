import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';






function App() {
	return (
		<div className="App">
			<body className="page">
				<div className="page__container">
            <Header    />
            <Main    />
            <Footer   />
            <PopupWithForm  />

				</div>
				<div className="page__popup-wrapper">
					<div className="popup popup_type_edit">
						<div className="popup__modal-window">
							<button className="button popup__close-button" type="button" aria-label="Закрыть"></button>
							<form action="#" className="popup__form popup__form_type_edit" method="POST" name="name" id="form-edit" novalidate>
								<h2 className="title popup__title">Редактировать профиль</h2>
								<label className="popup__form-field">
									<input id="name-input" type="text" placeholder="Имя" className="popup__input popup__input_field_name"
										name="name" minlength="2" maxlength="40" required />
									<span id="name-input-error" className="popup__error"></span>
								</label>
								<label className="popup__form-field">
									<input id="about-input" type="text" placeholder="О себе" className="popup__input popup__input_field_job"
										name="about" minlength="2" maxlength="200" required />
									<span id="about-input-error" className="popup__error"></span>
								</label>
								<button type="submit" className="button popup__button popup__button_type_edit" aria-label="Сохранить"
									name="edit-form-button">
									Сохранить
								</button>
							</form>
						</div>
					</div>
					<div className="popup popup_type_add">
						<div className="popup__modal-window">
							<button className="button popup__close-button" type="button" aria-label="Закрыть"></button>
							<form action="#" className="popup__form popup__form_type_add" method="POST" name="add-card" id="form-add"
								novalidate>
								<h2 className="title popup__title">Новое место</h2>
								<label className="popup__form-field">
									<input id="placename-input" type="text" placeholder="Название"
										className="popup__input popup__input_field_card-name" name="name" minlength="2" maxlength="30" required />
									<span id="placename-input-error" className="popup__error"></span>
								</label>
								<label className="popup__form-field">
									<input id="image-input" type="url" placeholder="Ссылка на картинку"
										className="popup__input popup__input_field_card-image-link" name="link" required />
									<span id="image-input-error" className="popup__error"></span>
								</label>
								<button type="submit" className="button popup__button popup__button_type_add" aria-label="Создать"
									name="add-form-button">
									Создать
								</button>
							</form>
						</div>
					</div>
					<div className="popup popup_type_set-avatar">
						<div className="popup__modal-window">
							<button className="button popup__close-button" type="button" aria-label="Закрыть"></button>
							<form action="#" className="popup__form popup__form_type_set-avatar" method="POST" name="set-avatar"
								id="form-avatar" novalidate>
								<h2 className="title popup__title">Обновить аватар</h2>
								<label className="popup__form-field">
									<input id="avatar" type="url" placeholder="Ссылка на аватар"
										className="popup__input popup__input_field_avatar-link" name="avatar" required />
									<span id="avatar-error" className="popup__error"></span>
								</label>
								<button type="submit" className="button popup__button popup__button_type_set-avatar" aria-label="Сохранить"
									name="set-avatar-form-button">
									Сохранить
								</button>
							</form>
						</div>
					</div>
					<div className="popup popup_type_image">
						<div className="popup__modal-window popup__modal-window_type_image">
							<figure className="popup__show-image">
								<button className="button popup__close-button popup__close-button_place_image" type="button"
									aria-label="Закрыть"></button>
								<img src="#" alt="#" className="popup__image popup__item" />
								<figcaption className="popup__image-caption"></figcaption>
							</figure>
						</div>
					</div>
					<div className="popup popup_type_confirm">
						<div className="popup__modal-window">
							<button className="button popup__close-button" type="button" aria-label="Закрыть"></button>
							<div className="popup__confirm-window">
								<p className="title popup__title">Вы уверены?</p>
								<button type="submit" className="button popup__button popup__button_type_confirm" aria-label="Да"
									name="confirm-button">
									Да
								</button>
							</div>
						</div>
					</div>
				</div>
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
			</body>
		</div>
	);
}

export default App;
