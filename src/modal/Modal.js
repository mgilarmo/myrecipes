import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css';


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-box">
        test
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;