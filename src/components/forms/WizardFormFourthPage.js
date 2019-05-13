import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderInput from './renderInput';


const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <div>
      <label className="add-input-field">
        <i className="fa fa-plus" /> Add another note
      </label>
      <form onSubmit={handleSubmit}>
        <Field 
          name="notes" 
          type="text" 
          component={renderInput} 
          label="Notes" 
        />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="submit" disabled={pristine || submitting}>
            Submit
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
})(WizardFormThirdPage)
