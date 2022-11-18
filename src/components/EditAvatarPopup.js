import React from "react";
import PopupWithForm from "./PopupWithForm";



const EditAvatarPopup = (props) => {

  const avatarInputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm title="Обновить аватар" name="type_set-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonLabel={props.buttonLabel}>

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
