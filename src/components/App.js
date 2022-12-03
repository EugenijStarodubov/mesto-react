import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const [deletedCardId, setDeletedCerdId] = useState('')

  const [selectedCard, setSelectedCard] = useState({ name: '', link: '', isOpen: false });

  const [currentUser, setCurrentUser] = useState({ name: '', about: '', id: '', avatar: '' });

  const [ButtonLabelIsLoad, setButtonLabel] = useState('Сохранить');

  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getCards().then(
      cards => setCards(cards))
      .catch(err => console.log(err.message));

    api.getUser()
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message))
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  };

  const handleCardDelete = (id) => {
    setButtonLabel('Удаление...')

    const newCards = cards.filter(c =>
      id !== c._id
    );
    api.deleteCard(id).then(() => {
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  };

  const handleUpdateUser = (values) => {
    setButtonLabel('Сохранение...');
    api.updateUser(values)
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message));
    closeAllPopups({});
  };

  const handleUpdateAvatar = (link) => {
    setButtonLabel('Сохранение...')
    api.setAvatar(link)
      .then(link => setCurrentUser(link))
      .catch(err => console.log(err.message));
    closeAllPopups({});
  };

  const handleAddPlaceSubmit = (card) => {
    setButtonLabel('Сохранение...')
    api.updateCards(card).then(
      card => setCards([...cards, card]))
      .catch(err => console.log(err.message));
    closeAllPopups({});
  };

  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    handleCardDelete(deletedCardId);
    setDeletedCerdId('');
    closeAllPopups({});
  };

  const handleIsAddPlacePopupOpen = () => {
    setButtonLabel('Сохранить');
    setIsAddPlacePopupOpen(true);
  };

  const handleIsEditProfileOpen = () => {
    setButtonLabel('Сохранить');
    setIsEditProfileOpen(true);
  };

  const handleIsEditAvatarPopupOpen = () => {
    setButtonLabel('Сохранить');
    setIsEditAvatarPopupOpen(true);
  };

  const handleIsConfirmPopupOpen = (id) => {
    setButtonLabel('Да');
    setIsConfirmPopupOpen(true);
    setDeletedCerdId(id);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link, isOpen: true })
  };

  const closeAllPopups = (card = null) => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);

    //передаем данные картинки чтобы атрибут src не обнулялся до окончания transition
    (card) && setSelectedCard({ name: card.name, link: card.link, isOpen: false });
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
            onDeleteClick={handleIsConfirmPopupOpen}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />

          <Footer />

          <div className="page__popup-wrapper">

            <EditProfilePopup isOpen={isEditProfileOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              buttonLabel={ButtonLabelIsLoad} />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              buttonLabel={ButtonLabelIsLoad}
            />

            <AddPlacePopup isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              buttonLabel={ButtonLabelIsLoad}
            />

            <PopupWithForm title="Вы уверены?" name="type_confirm"
              isOpen={isConfirmPopupOpen}
              onSubmit={handleConfirmSubmit}
              onClose={closeAllPopups}
              buttonLabel={ButtonLabelIsLoad}
            />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );

};

export default App;
