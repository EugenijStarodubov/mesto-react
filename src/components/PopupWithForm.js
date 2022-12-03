import { useEffect, useState } from 'react';
import useClose from '../customHooks/useClose';

function PopupWithForm( {isFormValid, name, isOpen, onClose, onSubmit, title, buttonLabel, children}) {

	useClose(isOpen, onClose);

  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  useEffect(() => {
    isFormValid
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true);
  }, [isFormValid]);

  return (
    <div className={`popup popup_${name} popup_${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={
        (e) => {
          (e.target === e.currentTarget) && onClose()
        }
      }>
      <div className="popup__modal-window" >
        <button className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}>
        </button>

        <form action="#"
          className={`popup__form popup__form_${name}`}
          method="POST"
          name={`form-${name}`}
          id={`form-${name}`}
          onSubmit={onSubmit}
        >
          <h2 className="title popup__title">{title}</h2>

          {children}

          <button type="submit"
            className={`button popup__button popup__button_${name}
            popup__button${(isSubmitButtonDisabled && (name !== 'type_confirm')) ? '_disabled' : ''}`}
            aria-label={buttonLabel}
            name={`form-button_${name}`}
            disabled={(name === 'type_confirm') ? false : isSubmitButtonDisabled}
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
