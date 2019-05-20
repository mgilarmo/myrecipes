import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import renderInputList from './renderInputList';
import validate from './validate';


const renderIngredients = (props) => (
  <div>
    <div className="wizard-title">
      <label>Ingredients</label> 
      <label className="add-input-field" onClick={() => props.fields.push()}>
        <i className="fa fa-plus" />
        Add ingredient
      </label>
    </div>
    <ul>
      {props.fields.map((ingredient, index) => (
        <li key={index}>
          <Field
            name={ingredient}
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

const WizardFormSecondPage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FieldArray name="ingredients" component={renderIngredients} />
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
})(WizardFormSecondPage)