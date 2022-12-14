import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';

import ProtectedRoute from '../customHooks/ProtectedRoute';

import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import * as auth from "../utils/Auth";

function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const [deletedCardId, setDeletedCardId] = useState('')

  const [selectedCard, setSelectedCard] = useState({ name: '', link: '', isOpen: false });

  const [currentUser, setCurrentUser] = useState({ name: '', about: '', id: '', avatar: '' });

  const [cards, setCards] = useState([]);



  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isOk, setIsOk] = useState(null);


  useEffect(() => {
    api.getCards().then(
      cards => setCards(cards))
      .catch(err => console.log(err.message));

    api.getUser()
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message))
  }, []);

const onRegister = async (email, password) => {

   auth.register({ email, password})
   .then(() => {
    setIsOk(true);
   })
   .catch(err => {
    setIsOk(false);
    console.log(err.message);
   })
   .finally(() => {
    setIsInfoTooltipOpen(true);

  });

  setIsOk(null);
}

const onLogin = async (email, password) => {

  await auth.authorize({ email, password})
  .catch(err => console.log(err))

        }



  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // ?????????????????? ?????????? ???????????? ???? ???????????? ????????????????????, ???????????????????? ?? ???????? ?????????? ????????????????
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  };

  const handleCardDelete = (id) => {
    setIsLoading(true);
    const newCards = cards.filter(c =>
      id !== c._id
    );
    api.deleteCard(id).then(() => {
      setCards(newCards);
    })
      .catch(err => console.log(err.message));
  };

  const handleUpdateUser = (values) => {
    setIsLoading(true);
    api.updateUser(values)
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err.message));
    closeAllPopups();
  };

  const handleUpdateAvatar = (link) => {
    setIsLoading(true);
    api.setAvatar(link)
      .then(link => setCurrentUser(link))
      .catch(err => console.log(err.message));
    closeAllPopups();
  };

  const handleAddPlaceSubmit = (card) => {
    setIsLoading(true);
    api.updateCards(card).then(
      card => setCards([...cards, card]))
      .catch(err => console.log(err.message));
    closeAllPopups();
  };

  const handleConfirmSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    handleCardDelete(deletedCardId);
    setDeletedCardId('');
    closeAllPopups();
  };

  const handleIsAddPlacePopupOpen = () => {
    setIsLoading(false);
    setIsAddPlacePopupOpen(true);
  };

  const handleIsEditProfileOpen = () => {
    setIsLoading(false);
    setIsEditProfileOpen(true);
  };

  const handleIsEditAvatarPopupOpen = () => {
    setIsLoading(false);
    setIsEditAvatarPopupOpen(true);
  };

  const handleIsConfirmPopupOpen = (id) => {
    setIsLoading(false);
    setIsConfirmPopupOpen(true);
    setDeletedCardId(id);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link, isOpen: true })
  };

  const closeAllPopups = (card = null) => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsInfoTooltipOpen(false);

    //???????????????? ???????????? ???????????????? ?????????? ?????????????? src ???? ?????????????????? ???? ?????????????????? transition
    (card) && setSelectedCard({ ...selectedCard, isOpen: false });
  };

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      setCurrentUser
    }} >
      <div className="page" >
        <div className="page__container">

          <Header userEmail={''}/>

          <Switch>

          <Route path='/sign-up'>
            <Register
              setIsOk={setIsOk}
              isOk={isOk}
              isOpen={isInfoTooltipOpen}
              onRegister={onRegister}
              onClose={closeAllPopups}
            />
          </Route>

          <Route  path='/sign-in'>
            <Login
              isOk={isOk}
              isOpen={isInfoTooltipOpen}
              onLogin={onLogin}
              onClose={closeAllPopups}
            />
          </Route>

          <ProtectedRoute exact path="/"
            ??omponent={Main}
            isLoggedIn={isLoggedIn}
            onEditProfile={handleIsEditProfileOpen}
            onAddPlace={handleIsAddPlacePopupOpen}
            onEditAvatar={handleIsEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            onDeleteClick={handleIsConfirmPopupOpen}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Route>
          {
            isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/sign-up" />
            )
          }
          </Route>

          </Switch>

          <Footer />

          <div className="page__popup-wrapper">

            {/* <InfoTooltip
            isOpen={isInfoTooltipOpen}
            isOk={isOk} /> */}

            <EditProfilePopup isOpen={isEditProfileOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading} />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              isLoading={isLoading}
              />

            <AddPlacePopup isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              isLoading={isLoading}
            />

            <PopupWithForm title="???? ???????????????" name="type_confirm"
              isOpen={isConfirmPopupOpen}
              onSubmit={handleConfirmSubmit}
              onClose={closeAllPopups}
              isLoading={isLoading}
              buttonLabel={isLoading ? '????????????????...' : '????'}
            />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );

};

export default App;
