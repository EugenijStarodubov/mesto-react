import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext'



const EditProfilePopup = (props) => {

  const { currentUser } = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }


  return (
    <PopupWithForm title="Редактировать профиль" name="type_edit"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonLabel={props.buttonLabel}>

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="name" placeholder={currentUser.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />
        <span id="name-input-error" className="popup__error"></span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="about" placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required />
        <span id="name-input-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  )

}

export default EditProfilePopup;
