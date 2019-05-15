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

  const onRecipeSubmit = (formValues) => {
    props.editRecipe(formValues);
  };

  return (
    <div>
      <Modal title="Edit this Recipe" dismiss={onDismiss}>
        <WizardForm onSubmit={onRecipeSubmit} />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editRecipe: dispatch(editRecipe)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditRecipe);