import React from 'react';

function PopupWithForm(props) {

  return (
    <div className="popup popup_type_edit">
      <div className="popup__modal-window">
        <button className="button popup__close-button" type="button" aria-label="Закрыть"></button>
        <form action="#" className="popup__form popup__form_type_edit" method="POST" name="name" id="form-edit" noValidate>
          <h2 className="title popup__title">Редактировать профиль</h2>
          <button type="submit" className="button popup__button popup__button_type_edit" aria-label="Сохранить"
            name="edit-form-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
