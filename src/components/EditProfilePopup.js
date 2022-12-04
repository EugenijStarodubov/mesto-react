import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";


const EditProfilePopup = (props) => {

  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    nameInput.setValue(currentUser.name);
    aboutInput.setValue(currentUser.about);
  }, [currentUser]);

  const nameInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });
  const aboutInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateUser({
      name: nameInput.value,
      about: aboutInput.value,
    });
  }

  const handleClose = () => {
    nameInput.setValue(currentUser.name);
    aboutInput.setValue(currentUser.about);
    props.onClose();
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="type_edit"
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonLabel={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      isFormValid={aboutInput.isInputValid && nameInput.isInputValid}
    >

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="name" placeholder={"Имя"}
          value={nameInput.value}
          onChange={nameInput.onChange}
          noValidate
          required />
        <span id="name-input-error" className={`popup__error ${!nameInput.isInputValid ? 'popup__error_visible' : ''}`}>{nameInput.errorMessage}</span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="about" placeholder="Обо мне"
          value={aboutInput.value}
          onChange={aboutInput.onChange}
          noValidate
          required />
        <span id="name-input-error" className={`popup__error  ${!aboutInput.isInputValid ? 'popup__error_visible' : ''}`}>{aboutInput.errorMessage}</span>
      </label>
    </PopupWithForm>
  )
};

export default EditProfilePopup;
