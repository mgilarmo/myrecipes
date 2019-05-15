import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../components/modal/Modal';
import WizardForm from '../forms/WizardForm';
import {createRecipe} from '../../actions/actions';
import history from '../history';


const CreateRecipe = (props) => {

  const onDismiss = () => {
    history.push('/');
  }

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div>
      <Modal title="Add a Recipe" dismiss={onDismiss}>
        <WizardForm onSubmit={onSubmit} />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: dispatch(createRecipe)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRecipe);