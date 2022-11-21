import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useInput } from "../customHooks/useInput";

const AddPlacePopup = (props) => {

  const [cardName, setCardName] = React.useState('');
  const [cardUrl, setCardUrl] = React.useState('');

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: cardName,
      link: cardUrl
    });
    {
      setCardName('');
      setCardUrl('');
    }
  }

  const cardNameInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });
  const urlInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
    'isUrl': true
  });

  return (
    <PopupWithForm title="Новое место" name="type_add"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonLabel={props.buttonLabel}
    >

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="name" placeholder="Название"
          value={cardNameInput.value}
          onChange={(e => cardNameInput.onChange(e))}
          // onChange={(e => setCardName(e.target.value))}
          required />
        <span id="name-input-error" className={`popup__error ${cardNameInput.isErrorVisible}`}>{cardNameInput.errorMessage}</span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="url"
          className="popup__input popup__input_field_name"
          name="link" placeholder="Ссылка на картинку"
          value={urlInput.value}
          onChange={(e => urlInput.onChange(e))}
          // onChange={(e => setCardUrl(e.target.value))}
          required />

        <span id="name-input-error" className={`popup__error ${urlInput.isErrorVisible}`}>{urlInput.errorMessage}</span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
