import React from 'react';
import { Field, FormSection, reduxForm } from 'redux-form';
import renderInputList from './renderInputList';
import validate from './validate';


class WizardFormFourthPage extends React.Component {

  state = {
    notes: [{name:""}]
  }
  
  handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
      let notes = [...this.state.notes]
      notes[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ notes })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
  
  addIngr = (e) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, {name:""}],
    }));
  }
    
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} onChange={this.handleChange} >
        <div className="wizard-title">
          <label>Notes</label> 
          <label className="add-input-field" onClick={this.addIngr}>
            <i className="fa fa-plus" />
            Add another note
          </label>
        </div>
        <FormSection name="notes" component="div" className="wizard-list">
          {
            this.state.notes.map((val, i)=> {
              let ingrId = `dir-${i}`
              return (
                <Field
                  component={renderInputList}
                  label={`${i + 1})`}
                  type="text"
                  name={ingrId}
                  key={i}
                  data-id={i}
                  value={this.state.notes[i].name} 
                />
              );
            })
          }
        </FormSection>
        <div>
          <button type="button" className="previous" onClick={this.props.previousPage}>
            Previous
          </button>
          <button type="submit" className="submit" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourthPage)
