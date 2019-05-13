import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


class WizardFormSecondPage extends React.Component {
  state = {
    ingred: []
  };

  addIngredient() {
    this.setState({ingred: [...this.state.ingred]})
  }

  changeInput(e, i) {
    this.state.ingred[i] = e.target.value
    this.setState({ingred: this.state.ingred})
  }

  dynamicInput = () => {
    {this.state.ingred.map((item, i) => {
      return (
        <div key={i}>
          <input value={item} onChange={e => this.changeInput(e, i)}/>
        </div>
      );
    })}
  }

  render() {
    return (
      <div>
        <label className="add-input-field" onClick={e => this.addIngredient(e)}>
          <i className="fa fa-plus" /> Add another ingredient
        </label>
        <form onSubmit={this.props.handleSubmit}>
          <Field 
            name="ingredients" 
            type="text" 
            component={this.state.ingred} 
            label="Ingredients" />
          <div>
            <button type="button" className="previous" onClick={this.props.previousPage}>
              Previous
            </button>
            <button type="submit" className="next">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'recipeWizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)