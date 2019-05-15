import React from 'react';
import { Field, FormSection, reduxForm } from 'redux-form';
import renderInputList from './renderInputList';
import validate from './validate';
import renderInput from './renderInput';


class WizardFormThirdPage extends React.Component {

  state = {
    directions: [{name:""}]
  }
  
  handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
      let directions = [...this.state.directions]
      directions[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ directions })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
  
  addIngr = (e) => {
    this.setState((prevState) => ({
      directions: [...prevState.directions, {name:""}],
    }));
  }
    
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} onChange={this.handleChange} >
        <div className="wizard-title">
          <label>Directions</label> 
          <label className="add-input-field" onClick={this.addIngr}>
            <i className="fa fa-plus" />
            Add another direction
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
        <FormSection name="directions" component="div" className="wizard-list">
          {
            this.state.directions.map((val, i)=> {
              let dirId = `dir-${i}`
              return (
                <Field
                  name={dirId}
                  component={renderInputList}
                  type="text"
                  label={`${i + 1})`}
                  key={dirId}
                  data-id={dirId}
                  value={this.state.directions[i].name} 
                  id={dirId}
                  className={dirId}
                />
              );
            })
          }
        </FormSection>
        <div>
          <button type="button" className="previous" onClick={this.props.previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)