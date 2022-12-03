import PopupWithForm from "./PopupWithForm";
import { useInput } from "../customHooks/useInput";

const AddPlacePopup = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAddPlace({
      name: cardNameInput.value,
      link: urlInput.value
    });
    {
      cardNameInput.setValue('');
      urlInput.setValue('');
    }
  }

  const handleClose = () => {
    cardNameInput.setValue('');
    urlInput.setValue('');

    props.onClose();
  }

  const cardNameInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });
  const urlInput = useInput('', {
    'isEmpty': true,
    'isUrl': true,
  });



  return (
    <PopupWithForm title="Новое место" name="type_add"
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonLabel={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      isFormValid={cardNameInput.isInputValid && urlInput.isInputValid}
    >

      <label className="popup__form-field" >
        <input id="name-input" type="text"
          className="popup__input popup__input_field_name"
          name="name" placeholder="Название"
          value={cardNameInput.value}
          onChange={(e => cardNameInput.onChange(e))}
          noValidate
          required />
        <span id="name-input-error" className={`popup__error ${!cardNameInput.isEmpty || cardNameInput.isInputValid ? cardNameInput.isErrorVisible : ''}`}>{cardNameInput.errorMessage}</span>
      </label>

      <label className="popup__form-field" >
        <input id="name-input" type="url"
          className="popup__input popup__input_field_name"
          name="link" placeholder="Ссылка на картинку"
          value={urlInput.value}
          onChange={(e => urlInput.onChange(e))}
          noValidate
          required />

        <span id="name-input-error" className={`popup__error ${!urlInput.isEmpty || urlInput.isInputValid ? urlInput.isErrorVisible : ''}`}>{urlInput.errorMessage}</span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
