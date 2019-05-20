
import React from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import {destroy} from 'redux-form';
import '../../css/Modal.css';


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">
          {props.title}
          <i 
            className="fas fa-times close" 
            onClick={() => { 
              props.dismiss(); 
              props.destroy('recipeWizard');
            }}
          />
        </div>
        <div className="modal-content">
          {props.children}
        </div>
        <div className="modal-actions">
          <div className="action-back">
            {props.actionBack}
          </div>
          <div className="action-forward">
            {props.actionForward}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    destroy: (form) => dispatch(destroy(form))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Modal);