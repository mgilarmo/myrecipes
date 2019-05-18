import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../modal/Modal';
import history from '../history';
import {deleteRecipe} from '../../actions/actions';
import '../../css/crud/DeleteRecipe.css'


const DeleteRecipe = (props) => {

  const onDismiss = () => {
    history.push('/');
  }

  const actionButtons = (
    <React.Fragment>
      <button 
        className="confirm-action"
        onClick={() => props.deleteRecipe(props.selectedRecipeId)}
      >
        Delete
      </button>
      <button>
        <Link 
          to="/"
          className="cancel-action"
        >
          Cancel
        </Link>
      </button>
    </React.Fragment>
  );
  
  const modalContent = (
    <div>
      <div className="delete-confirm-message">
        Are you sure you want to delete this recipe:
      </div>
      <div className="delete-receipe recipe-card">
        {`${props.selectedRecipeName}`}
      </div>
    </div>
  );

  return (
    <div>
      <Modal title="Delete this Recipe" dismiss={onDismiss} actions={actionButtons}>
        {modalContent}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeId: state.ui.selectedRecipeId,
    selectedRecipeName: state.ui.selectedRecipeName
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: dispatch(deleteRecipe)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteRecipe);