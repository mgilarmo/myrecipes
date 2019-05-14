import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../components/modal/Modal';
import WizardForm from '../forms/WizardForm';
import history from '../history';


const EditRecipe = (props) => {

  const onDismiss = () => {
    history.push('/');
  }

  const onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };


  return (
    <div>
      <Modal title="Edit this Recipe" dismiss={onDismiss}>
        <WizardForm />
      </Modal>
    </div>
  );
};

export default connect(
  null
)(EditRecipe);