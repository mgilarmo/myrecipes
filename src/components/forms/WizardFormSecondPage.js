import React from 'react';
import { Field, FormSection, reduxForm } from 'redux-form';
import renderInputList from './renderInputList';
import validate from './validate';


class WizardFormSecondPage extends React.Component {

  state = {
    ingreds: [{name:""}]
  }
  
  handleChange = (e) => {
    if (["name"].includes(e.target.className) ) {
      let ingreds = [...this.state.ingreds]
      ingreds[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ ingreds })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
  
  addIngr = (e) => {
    this.setState((prevState) => ({
      ingreds: [...prevState.ingreds, {name:""}],
    }));
  }
  
  dynamicInput(ingr) {
    return (
      <FormSection name="ingredients" component="div" className="wizard-list">
        {
          ingr.map((val, i)=> {
            let ingrId = `ingr-${i}`
            return (
              <Field
                component={renderInputList}
                label={`${i + 1})`}
                type="text"
                name={ingrId}
                key={i}
                data-id={i}
                value={this.props.initialValues.ingredients === [] ? ingr[i].name : this.props.initialValues.ingredients[i]} 
                id={ingrId}
                className={ingrId}
              />
            );
          })
        }
      </FormSection>
    );
  }

  render() {
    console.log(this.props.initialValues)

    return (
      <form onSubmit={this.props.handleSubmit} onChange={this.handleChange} >
        <div className="wizard-title">
          <label>Ingredients</label> 
          <label className="add-input-field" onClick={this.addIngr}>
            <i className="fa fa-plus" />
            Add another ingredient
          </label>
        </div>
        {this.props.initialValues.ingredients === [] ? this.dynamicInput(this.state.ingreds) : this.dynamicInput(this.props.initialValues.ingredients)}
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
})(WizardFormSecondPage)