import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../components/modal/Modal';
import WizardForm from '../forms/WizardForm';
import {editRecipe} from '../../actions/actions';
import history from '../history';


const EditRecipe = (props) => {

  const onDismiss = () => {
    history.push('/');
  }

  const onSubmit = (formValues) => {
    props.editRecipe(formValues);
  };

  const findRecipe = props.recipes.find(recipe => recipe.id === props.selectedRecipeId);

  return (
    <div>
      <Modal title="Edit this Recipe" dismiss={onDismiss} purpose="edit">
        <WizardForm 
          onSubmit={onSubmit} 
          initialValues={findRecipe} />
      </Modal>
    </div>
  );
};

const maptStateToProps = (state) => {
  return {
    selectedRecipeId: state.ui.selectedRecipeId,
    recipes: state.recipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editRecipe: (formValues) => dispatch(editRecipe(formValues))
  }
}

export default connect(
  maptStateToProps,
  mapDispatchToProps
)(EditRecipe);