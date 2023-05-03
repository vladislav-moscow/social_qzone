import "./modal.css";

function Modal({ active, handleClickActive, children}) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={handleClickActive}
    >
      <div className={active ? "modal__content active" : "modal__content"} onClick={e=> e.stopPropagation()}>
        <div className="modal__close" onClick={handleClickActive}>
          +
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
