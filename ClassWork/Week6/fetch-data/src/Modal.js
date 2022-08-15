import React from 'react'

const Modal = props =>
{
    if (!props.show) {
        return null
    }
  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-conent' onClick={e => e.stopPropagation()}>
        <div>
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          This is modal content
        </div>
        <div className="modal-footer">
          <button onClick = {props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal