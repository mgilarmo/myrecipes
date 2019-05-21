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

  return (
    <Modal title="Delete this Recipe" dismiss={onDismiss} purpose="delete">
      <div className="delete-confirm-message">
        Are you sure you want to delete this recipe:
      </div>
      <div className="delete-receipe recipe-card">
        {`${props.selectedRecipeName}`}
      </div>
      <div>
        <button>
          <Link 
            to="/"
            className="cancel-action"
          >
            Cancel
          </Link>
        </button>
        <button 
          className="confirm-action"
          onClick={() => props.deleteRecipe(props.selectedRecipeId)}
        >
          Delete
        </button>
      </div>
    </Modal>
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
    deleteRecipe: (id) => dispatch(deleteRecipe(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteRecipe);