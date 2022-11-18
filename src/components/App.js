import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
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

  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {


    api.getCards().then(
      cards => setCards(cards))
      .catch(err => console.log(err.message));
    // }, []);


    // React.useEffect(() => {
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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  }

  const handleCardDelete = (id) => {
    const newCards = cards.filter(c =>
      id !== c._id
    );
    api.deleteCard(id).then(() => {
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  }

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

  const handleAddPlaceSubmit = (card) => {
    api.updateCards(card).then(
      card => setCards([...cards, card]))
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
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />

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

            <AddPlacePopup isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              buttonLabel={popups.buttonPopupsWithForm}
            />




            <PopupWithForm title="Вы уверены?" name="type_confirm" />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );

};

export default App;
