import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/Modal.css';


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">
          {props.title}
          <i className="fas fa-times close" onClick={props.dismiss} />
        </div>
        <div className="modal-content">
          {props.children}
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