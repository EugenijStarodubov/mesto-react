import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const popups = {
    popupEdit:
    {
      title: 'Редактировать профиль',
      name: 'type_edit',
      buttonLabel: 'Сохранить',
    },
    popupAdd:
    {
      title: 'Новое место',
      name: 'type_add',
      buttonLabel: 'Сохранить',
    },
    popupSetAvatar:
    {
      title: 'Обновить аватар',
      name: 'type_set-avatar',
      buttonLabel: 'Сохранить',
    }
    ,
    popupConfirm:
    {
      title: 'Вы уверены?',
      name: 'type_confirm',
      buttonLabel: 'Да',
    }
  }

  const inputs = {

    editNameInput:
    {
      type: 'text',
      name: 'name',
      placeholder: 'Имя'
    },
    editAboutInput: {
      type: 'text',
      name: 'about',
      placeholder: 'О себе'

    },

    addPlacenameInput: {
      type: 'text',
      name: 'name',
      placeholder: 'Название'
    },
    addPlaceUrlInput: {
      type: 'url',
      name: 'link',
      placeholder: 'Ссылка на картинку'
    },
    avatarUrlInput:
    {
      type: 'url',
      name: 'avatar',
      placeholder: 'Ссылка на аватар'
    }
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleIsAddPlacePopupOpen = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleIsEditProfileOpen = () => {
    setIsEditProfileOpen(true);
  }
  const handleIsEditAvatarPopupOpen = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);
  }



  return (
    <div className="App">
      <div className="page">
        <div className="page__container">

          <Header />
          <Main onEditProfile={handleIsEditProfileOpen} onAddPlace={handleIsAddPlacePopupOpen} onEditAvatar={handleIsEditAvatarPopupOpen} />
          <Footer />
          <div className="page__popup-wrapper">
            <PopupWithForm isOpen={isEditProfileOpen} popup={popups.popupEdit} inputName={inputs.editNameInput} inputAbout={inputs.editAboutInput} onClose={closeAllPopups} >
              <label className="popup__form-field" >
                <input id="name-input" type={inputs.editNameInput.type} className="popup__input popup__input_field_name"
                  name={inputs.editNameInput.name} placeholder={inputs.editNameInput.placeholder} required />
                <span id="name-input-error" className="popup__error"></span>
              </label>
              <label className="popup__form-field" >
                <input id="name-input" type={inputs.editAboutInput.type} className="popup__input popup__input_field_name"
                  name={inputs.editAboutInput.name} required placeholder={inputs.editAboutInput.placeholder} />
                <span id="name-input-error" className="popup__error"></span>
              </label>
            </PopupWithForm>
            <PopupWithForm popup={popups.popupAdd} inputName={inputs.addPlacenameInput} inputAbout={inputs.addPlaceUrlInput} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
              <label className="popup__form-field" >
                <input id="name-input" type={inputs.addPlacenameInput.type} className="popup__input popup__input_field_name"
                  name={inputs.addPlacenameInput.name} placeholder={inputs.addPlacenameInput.placeholder} required />
                <span id="name-input-error" className="popup__error"></span>
              </label>
              <label className="popup__form-field" >
                <input id="name-input" type={inputs.addPlaceUrlInput.type} className="popup__input popup__input_field_name"
                  name={inputs.addPlaceUrlInput.name} required placeholder={inputs.addPlaceUrlInput.placeholder} />
                <span id="name-input-error" className="popup__error"></span>
              </label>
            </PopupWithForm>
            <PopupWithForm popup={popups.popupSetAvatar} inputName={inputs.avatarUrlInput} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
              <label className="popup__form-field" >
                <input id="name-input" type={inputs.avatarUrlInput.type} className="popup__input popup__input_field_name"
                  name={inputs.avatarUrlInput.name} placeholder={inputs.avatarUrlInput.placeholder} required />
                <span id="name-input-error" className="popup__error"></span>
              </label>
            </PopupWithForm >
            <PopupWithForm popup={popups.popupConfirm} />
            <ImagePopup />
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
    </div >

  );
}

export default App;
