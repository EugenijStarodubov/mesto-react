import React from "react";
import PopupWithForm from "./PopupWithForm";

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
          value={cardName}
          onChange={(e => setCardName(e.target.value))}
          required />
        <span id="name-input-error" className="popup__error"></span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="url"
          className="popup__input popup__input_field_name"
          name="link" placeholder="Ссылка на картинку"
          value={cardUrl}
          onChange={(e => setCardUrl(e.target.value))}
          required />

        <span id="name-input-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
