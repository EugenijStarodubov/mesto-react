import useClose from '../customHooks/useClose';
import allBad from '../images/allBad.svg';
import allOk from '../images/allOk.svg';

function InfoTooltip( {isOpen, isOk, onClose}) {

	useClose(isOpen, onClose);

  return (
    <div className={`tooltip ${isOpen ? 'tooltip_opened' : ''}`}
      onClick={
        (e) => {
          (e.target === e.currentTarget) && onClose()
        }
      }>

      <div className="tooltip__modal-window" >
        <button className="button tooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}>
        </button>
        <div className="tooltip__wrapper">
          <img src={isOk ? allOk : allBad} className={`tooltip__image`} />

          <h2 className="tooltip__title">{
          isOk
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'
          }</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
