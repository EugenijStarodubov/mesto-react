import React from "react";



function ImagePopup() {

  return (
    <div className="popup popup_type_image">
      <div className="popup__modal-window popup__modal-window_type_image">
        <figure className="popup__show-image">
          <button className="button popup__close-button popup__close-button_place_image" type="button"
            aria-label="Закрыть"></button>
          <img src="#" alt="#" className="popup__image popup__item" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
