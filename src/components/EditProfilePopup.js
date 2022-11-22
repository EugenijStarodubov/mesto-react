import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";


const EditProfilePopup = (props) => {

  const { currentUser } = useContext(CurrentUserContext);



  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
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
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    nameInput.setValue(nameInput.value);
    aboutInput.setValue(aboutInput.value);

    // Передаём значения управляемых компонентов во внешний обработчик
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
      buttonLabel={props.buttonLabel}
      aboutInputValid={aboutInput.isInputValid}
      nameInputValid={nameInput.isInputValid}
    >

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="name" placeholder={"Имя"}
          value={nameInput.value}
          onChange={(e) => nameInput.onChange(e)}
          noValidate
          required />
        <span id="name-input-error" className={`popup__error ${nameInput.isErrorVisible}`}>{nameInput.errorMessage}</span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="about" placeholder="Обо мне"
          value={aboutInput.value}
          onChange={(e) => aboutInput.onChange(e)}
          noValidate
          required />
        <span id="name-input-error" className={`popup__error ${aboutInput.isErrorVisible}`}>{aboutInput.errorMessage}</span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
