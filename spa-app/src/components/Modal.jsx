const Modal = ({visible, onDismiss, title, text}) => {
    if (!visible) {
      return null
    }
    return (
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{title}</h5>
            <button type="button" class="btn-close" onClick={onDismiss}></button>
          </div>
          <div class="modal-body">
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
}

export default Modal