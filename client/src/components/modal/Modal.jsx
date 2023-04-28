import "./modal.css";

function Modal({ active, handleClickActive, handleClickAgree}) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={handleClickActive}
    >
      <div className={active ? "modal__content active" : "modal__content"} onClick={e=> e.stopPropagation()}>
        <div className="modal__close" onClick={handleClickActive}>
          +
        </div>
        <div className="confirmation">
          <h3 className="confirmation__Title">
            Вы действительно хотите удалить этот пост?
          </h3>
          <div className="confirmation__Button">
            <button 
              className="confirmation__Button-Agree btn"
              onClick={handleClickAgree}
            >
              Подтвердить
            </button>
            <button
              className="confirmation__Button-Disagree btn"
              onClick={handleClickActive}
            >
              Отказаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
