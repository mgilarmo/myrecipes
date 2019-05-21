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
    props.createRecipe(formValues);
  };

  return (
    <div>
      <Modal title="Add a Recipe" dismiss={onDismiss} purpose="create">
        <WizardForm onSubmit={onSubmit} />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (formValues) => dispatch(createRecipe(formValues))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRecipe);