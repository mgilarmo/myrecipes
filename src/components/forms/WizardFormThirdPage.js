import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import renderInput from './renderInput';
import renderInputList from './renderInputList';
import validate from './validate';


const renderDirections = (props) => (
  <div>
    <div className="wizard-title">
      <label>Directions</label> 
      <label className="add-input-field" onClick={() => props.fields.push()}>
        <i className="fa fa-plus" />
        Add direction
      </label>
    </div>
    <Field 
      name="ovenTemp"
      component={renderInput}
      type="tel"
      placeholder="none, if blank"
      label="Set Oven Temp"
      specifyUnit="&deg; F"
      className="wizard-list oven-temp"
    />
    <ul>
      {props.fields.map((direction, index) => (
        <li key={index}>
          <Field
            name={direction}
            type="text"
            component={renderInputList}
            label={`${index + 1})`}
            onRemoveClick={() => props.fields.remove(index)}
          />
        </li>
      ))}
    </ul>
  </div>
);

const WizardFormThirdPage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FieldArray name="directions" component={renderDirections} />
      <div>
        <button type="button" className="previous" onClick={props.previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)