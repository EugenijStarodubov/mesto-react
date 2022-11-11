import React from 'react';



function PopupWithForm(props) {

  const handleClosePopup = (e) => {
    (e.target === e.currentTarget) && props.onClose();
  }

  // const handleEscapeClose = (e) => {
  //   (e.keyCode === 27) && props.onClose();
  // }

  return (
    <>
      <div className={`popup popup_${props.popup.name} popup_${props.popup.name} ${props.isOpen ? 'popup_opened' : ''}`}
        onClick={handleClosePopup}

      >
        <div className="popup__modal-window" >
          <button className="button popup__close-button"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
          >

          </button>

          <form action="#"
            className={`popup__form popup__form_${props.popup.name}`}
            method="POST"
            name={`form-${props.popup.name}`}
            id={`form-${props.popup.name}`}

            noValidate>

            <h2 className="title popup__title">{props.popup.title}</h2>
            {props.children}

            <button type="submit"
              className={`button popup__button popup__button_${props.popup.name}`}
              aria-label={props.popup.buttonLabel}
              name={`form-button_${props.popup.name}`}>
              {props.popup.buttonLabel}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
