import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderInput from './renderInput';
import renderSelect from './renderSelect';

const WizardFormFirstPage = props => {

  const typesOfRecipes = [
    'appetizer',
    'bread, muffin, & scone',
    'breakfast', 
    'dessert',
    'dinner',
    'drink',
    'lunch',
    'main dish', 
    'salad or dressing',
    'sandwich',
    'sauce',
    'side dish',
    'snack',
    'soup, stew, or chili',
    'other'
  ];

  const typesOfDiets = [
    'none',
    'gluten-free', 
    'keto', 
    'paleo', 
    'raw food',
    'vegan', 
    'vegetarian', 
    'other'
  ];
  
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="recipeName"
        component={renderInput}
        position="item-block"
        type="text"
        label="Recipe Name*"
        placeholder="Recipe Name"
        autoFocus
      />
      <Field
        name="link"
        component={renderInput}
        position="item-block"
        type="text"
        label="Link"
        placeholder="Link to website"
      />
      <Field 
        name="typeOfRecipe" 
        component={renderSelect} 
        options={typesOfRecipes}
        label="Type of Recipe*" 
      />
      <Field 
        name="mainIngredient"
        component={renderInput}
        type="text"
        label="What's the main ingredient?*"
        placeholder="main ingredient"
      />
      <Field 
        name="typeOfDiet" 
        component={renderSelect}
        options={typesOfDiets}
        label="Type of diet*"
      />
      <Field 
        name="prepTime"
        component={renderInput}
        type="tel"
        label="Prep Time*"
        specifyUnit="(in min)"
        placeholder="Enter 0 if none"
      >
      </Field>
      <Field 
        name="cookTime"
        component={renderInput}
        type="tel"
        label="Cook Time*"
        specifyUnit="(in min)"
        placeholder="Enter 0 if none"
      />
      <Field 
        name="hardware"
        component={renderInput}
        position="item-block"
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
  );
};

export default reduxForm({
  form: 'recipeWizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);