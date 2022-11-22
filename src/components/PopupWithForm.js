import { useEffect, useState } from 'react';

function PopupWithForm(props) {

  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  useEffect(() => {
    props.isFormValid
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true);
  }, [props.isFormValid]);

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
            popup__button${(isSubmitButtonDisabled && (props.name !== 'type_confirm')) ? '_disabled' : ''}`}
            aria-label={props.buttonLabel}
            name={`form-button_${props.name}`}
            disabled={(props.name === 'type_confirm') ? false : isSubmitButtonDisabled}
          >
            {props.buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
