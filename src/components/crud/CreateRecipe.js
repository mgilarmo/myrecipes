import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../components/modal/Modal';
import RecipeForm from '../header/RecipeForm';
import history from '../history';


const CreateRecipe = (props) => {

  const dismiss = () => {
    history.push('/');
  }

  const actions = () => {
    return(
      <React.Fragment>
        <button className="action-button confirm">Add Recipe</button>
        <button className="action-button cancel" onClick={dismiss}>Cancel</button>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Modal title="Add a Recipe" actions={actions} onDismiss={dismiss}>
        <RecipeForm />
      </Modal>
    </div>
  );
};

export default connect(
  null
)(CreateRecipe);