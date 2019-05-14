import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderInput from './renderInput';
import renderSelect from './renderSelect';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props

  const typesOfMeals = [
    'breakfast', 
    'lunch', 
    'dinner', 
    'lunch or dinner', 
    'side dish',
    'soup',
    'salad',
    'appetizer',
    'dessert',
    'other'
  ];

  const typesOfDiets = [
    'None',
    'Vegetarian', 
    'Vegan', 
    'Gluten-free', 
    'Keto', 
    'Paleo', 
    'Raw Food',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={renderInput}
        position="item-block"
        name="recipeName"
        type="text"
        label="Recipe Name"
        placeholder="Recipe Name"
        autoFocus
      />
      <Field
        component={renderInput}
        position="item-block"
        name="link"
        type="text"
        label="Link"
        placeholder="Link to website"
      />
      <Field 
        component={renderSelect} 
        options={typesOfMeals}
        name="typeOfMeal" 
        label="Type of Meal " 
      />
      <Field 
        component={renderInput}
        name="mainIngredient"
        type="text"
        label="What's the main ingredient?"
        placeholder="main ingredient"
      />
      <Field 
        component={renderSelect}
        options={typesOfDiets}
        name="typeOfDiet" 
        label="Type of diet "
      />
      <Field 
        component={renderInput}
        name="prepTime"
        type="tel"
        label="Prep Time"
        specifyUnit="(in min)"
      >
      </Field>
      <Field 
        component={renderInput}
        name="cookTime"
        type="tel"
        label="Cook Time"
        specifyUnit="(in min)"
      />
      <Field 
        component={renderInput}
        position="item-block"
        name="hardware"
        type="text"
        label="Special hardware needed?"
        placeholder="roasting pan, skillet, whisk, etc."
      />

      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'recipeWizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)