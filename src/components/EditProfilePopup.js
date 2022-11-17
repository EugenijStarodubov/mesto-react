import React from "react";
import PopupWithForm from "./PopupWithForm";



const EditProfilePopup = () => {




  return (
    <PopupWithForm isOpen={isEditProfileOpen}
      popup={popups.popupEdit} name="type_edit" title="Редактировать профиль" inputName={inputs.editNameInput} inputAbout={inputs.editAboutInput}
      onClose={closeAllPopups}  >
      <label className="popup__form-field" >
        <input id="name-input" type={inputs.editNameInput.type} className="popup__input popup__input_field_name"
          name={inputs.editNameInput.name} placeholder={inputs.editNameInput.placeholder} required />
        <span id="name-input-error" className="popup__error"></span>
      </label>
      <label className="popup__form-field" >
        <input id="name-input" type={inputs.editAboutInput.type} className="popup__input popup__input_field_name"
          name={inputs.editAboutInput.name} required placeholder={inputs.editAboutInput.placeholder} />
        <span id="name-input-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  )

}

export default EditProfilePopup;
