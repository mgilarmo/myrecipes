const validate = formValues => {
  const errors = {}
  if (!formValues.recipeName) {
    errors.recipeName = 'You must enter a recipe name'
  }
  if (!formValues.typeOfRecipe) {
    errors.typeOfRecipe = 'Select a type of recipe'
  }
  if (!formValues.mainIngredient) {
    errors.mainIngredient = 'Type in the main ingredient of the recipe'
  }
  if (!formValues.typeOfDiet) {
    errors.typeOfDiet = 'Select a type of diet'
  }
  if (!formValues.prepTime) {
    errors.prepTime = 'Enter the Prep Time, in minutes'
  }
  if (!formValues.cookTime) {
    errors.cookTime = 'Enter the Cook Time, in minutes'
  }
  return errors
}

export default validate