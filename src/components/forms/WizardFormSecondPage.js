import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderInput from './renderInput';


const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div>
      <label className="add-input-field">
        <i className="fa fa-plus" /> Add another ingredient
      </label>
      <form onSubmit={handleSubmit}>
        <Field 
          name="ingredients" 
          type="text" 
          component={renderInput} 
          label="Ingredients" />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)