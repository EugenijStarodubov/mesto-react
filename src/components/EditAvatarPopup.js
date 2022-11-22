// * Валидация не реализовывалась в связи с тем, что по брифу инпут неуправляемы

import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {

  const avatarInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
    avatarInputRef.current.value = '';
  }

  const handleClose = () => {
    avatarInputRef.current.value = '';
    props.onClose({});
  }

  return (
    <PopupWithForm title="Обновить аватар" name="type_set-avatar"
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonLabel={props.buttonLabel}
      isFormValid={true}>

      <label className="popup__form-field" >
        <input ref={avatarInputRef} id="name-input" type="url"
          className="popup__input popup__input_field_name"
          name="avatar" placeholder="Ссылка на аватар" required />
        <span id="name-input-error" className="popup__error"></span>
      </label>
    </PopupWithForm >
  );
};

export default EditAvatarPopup;
