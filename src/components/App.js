import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { popups, inputs } from '../utils/utils';

function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '', isOpen: false })

  const handleIsAddPlacePopupOpen = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleIsEditProfileOpen = () => {
    setIsEditProfileOpen(true);
  };

  const handleIsEditAvatarPopupOpen = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link, isOpen: true })
  };

  const closeAllPopups = (card) => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);

    //передаем данные картинки чтобы атрибут src не обнулялся до окончания transition
    setSelectedCard({ name: card.name, link: card.link, isOpen: false });
  };

  React.useEffect(() => {
    const close = (e) => { (e.key === 'Escape') && closeAllPopups() };

    return (isAddPlacePopupOpen || isEditProfileOpen || isEditAvatarPopupOpen || selectedCard.isOpen)
      ? document.addEventListener('keydown', close)
      : () => document.removeEventListener('keydown', close);
  });

  return (
    <div className="page" >
      <div className="page__container">

        <Header />

        <Main onEditProfile={handleIsEditProfileOpen}
          onAddPlace={handleIsAddPlacePopupOpen}
          onEditAvatar={handleIsEditAvatarPopupOpen}
          onCardClick={handleCardClick} />

        <Footer />

        <div className="page__popup-wrapper">
          <PopupWithForm isOpen={isEditProfileOpen}
            popup={popups.popupEdit} inputName={inputs.editNameInput} inputAbout={inputs.editAboutInput}
            onClose={closeAllPopups}  >
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

          <PopupWithForm popup={popups.popupAdd} inputName={inputs.addPlacenameInput} inputAbout={inputs.addPlaceUrlInput}
            isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
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

          <PopupWithForm popup={popups.popupSetAvatar} inputName={inputs.avatarUrlInput}
            isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
            <label className="popup__form-field" >
              <input id="name-input" type={inputs.avatarUrlInput.type} className="popup__input popup__input_field_name"
                name={inputs.avatarUrlInput.name} placeholder={inputs.avatarUrlInput.placeholder} required />
              <span id="name-input-error" className="popup__error"></span>
            </label>
          </PopupWithForm >

          <PopupWithForm popup={popups.popupConfirm} />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </div>
  );
};

export default App;
