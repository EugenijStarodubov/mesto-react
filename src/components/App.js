import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { popups } from '../utils/utils';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '', isOpen: false });

  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', id: '', avatar: '' });


  console.log(currentUser)


  React.useEffect(() => {
    api.getUser()
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message))
  }, [])

  React.useEffect(() => {
    const close = (e) => { (e.key === 'Escape') && closeAllPopups({}) };

    return (isAddPlacePopupOpen || isEditProfileOpen || isEditAvatarPopupOpen || selectedCard.isOpen)
      ? document.addEventListener('keydown', close)
      : () => document.removeEventListener('keydown', close);
  }, []);

  const handleUpdateUser = (values) => {
    api.updateUser(values)
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message));
    closeAllPopups({});
  }

  const handleUpdateAvatar = (link) => {
    api.setAvatar(link)
      .then(link => setCurrentUser(link))
      .catch(err => console.log(err.message));
    closeAllPopups({});
  }

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



  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      setCurrentUser
    }} >
      <div className="page" >
        <div className="page__container">

          <Header />

          <Main onEditProfile={handleIsEditProfileOpen}
            onAddPlace={handleIsAddPlacePopupOpen}
            onEditAvatar={handleIsEditAvatarPopupOpen}
            onCardClick={handleCardClick} />

          <Footer />

          <div className="page__popup-wrapper">

            <EditProfilePopup isOpen={isEditProfileOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              buttonLabel={popups.buttonPopupsWithForm} />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              buttonLabel={popups.buttonPopupsWithForm}

            />

            <PopupWithForm title="Новое место" name="type_add"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              buttonLabel={popups.buttonPopupsWithForm}
            >

              <label className="popup__form-field" >
                <input id="name-input" type="text"
                  className="popup__input popup__input_field_name"
                  name="name" placeholder="Название" required />
                <span id="name-input-error" className="popup__error"></span>
              </label>

              <label className="popup__form-field" >
                <input id="name-input" type="url"
                  className="popup__input popup__input_field_name"
                  name="link" required placeholder="Ссылка на картинку" />
                <span id="name-input-error" className="popup__error"></span>
              </label>
            </PopupWithForm>



            <PopupWithForm title="Вы уверены?" name="type_confirm" />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );

};

export default App;
