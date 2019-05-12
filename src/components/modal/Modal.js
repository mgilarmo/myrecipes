import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css';


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div 
      className="modal" 
      onClick={props.onDismiss}
    >
      <div className="modal-box"
        onClick={e => e.stopPropagation}
      >
        <div className="modal-header">
          {props.title}
        </div>
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;