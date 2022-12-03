import useClose from "../customHooks/useClose";

function ImagePopup({ card, onClose }) {

	useClose(card.isOpen, onClose, card);

  return (

    <div className={`popup popup_type_image ${(card.isOpen) && 'popup_opened'}`}
      onClick={
        (e) => (e.target === e.currentTarget) && onClose(card)
      }>
      <figure className="popup__show-image" >
        <button className="button popup__close-button popup__close-button_place_image" type="button"
          aria-label="Закрыть"
          onClick={onClose} ></button>
        <img src={card.link} alt={card.name} className="popup__image popup__item" />
        <figcaption className="popup__image-caption">{card.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;
