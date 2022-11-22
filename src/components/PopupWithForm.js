import { useEffect, useState } from 'react';

function PopupWithForm(props) {
  if (!props.nameInputValid) {
    console.log('ok')
  }



  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [isFormInvalid, setFormInvalid] = useState(true);

  useEffect(() => {
    (props.nameInputValid && props.aboutInputValid)
      ? setFormInvalid(true)
      : setFormInvalid(false)
  }, [props.nameInputValid, props.aboutInputValid]);

  useEffect(() => {
    (props.cardNameInputValid && props.urlInputValid)
      ? setFormInvalid(true)
      : setFormInvalid(false)
  }, [props.cardNameInputValid, props.urlInputValid]);

  useEffect(() => {
    isFormInvalid
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true)
  }, [isFormInvalid]);

  console.group(props)
  return (
    <div className={`popup popup_${props.name} popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={
        (e) => {
          (e.target === e.currentTarget) && props.onClose({})

        }
      }>
      <div className="popup__modal-window" >
        <button className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}>
        </button>

        <form action="#"
          className={`popup__form popup__form_${props.name}`}
          method="POST"
          name={`form-${props.name}`}
          id={`form-${props.name}`}
          onSubmit={props.onSubmit}
        >
          <h2 className="title popup__title">{props.title}</h2>

          {props.children}

          <button type="submit"
            className={`button popup__button popup__button_${props.name}
            popup__button${isSubmitButtonDisabled ? '_disabled' : ''}`}
            aria-label={props.buttonLabel}
            name={`form-button_${props.name}`}
            disabled={isSubmitButtonDisabled}
          >
            {props.buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
