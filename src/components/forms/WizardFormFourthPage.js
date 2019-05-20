import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import renderInputList from './renderInputList';
import validate from './validate';


const renderNotes = (props) => (
  <div>
    <div className="wizard-title">
      <label>Notes</label> 
      <label className="add-input-field" onClick={() => props.fields.push()}>
        <i className="fa fa-plus" />
        Add note
      </label>
    </div>
    <ul>
      {props.fields.map((note, index) => (
        <li key={index}>
          <Field
            name={note}
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

const WizardFormFourthPage = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <FieldArray name="notes" component={renderNotes} />
      <div>
        <button type="button" className="previous" onClick={props.previousPage}>
          Previous
        </button>
        <button type="submit" className="submit" disabled={props.pristine || props.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourthPage)