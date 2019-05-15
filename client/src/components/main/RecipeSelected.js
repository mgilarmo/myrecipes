import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Recipes from './Recipes';
import '../../css/main/RecipeSelected.css';


const RecipeSelected = (props) => {

  const findRecipe = Recipes.find(recipe => recipe.id === props.selectedRecipeId);

  if(!findRecipe) {
    return <div></div>;
  }

  return (
    <div className="selected-recipe">
      <div className="edit-delete-recipe">
        <button className="edit-recipe">
          <Link to={`/edit/${props.selectedRecipeId}`}>
            <i className="fas fa-pen" />
          </Link>
        </button>
        <button className="delete-recipe">
          <Link to={`/delete/${props.selectedRecipeId}`}>
            <i className="fas fa-trash-alt" />
          </Link>
        </button>
      </div>
      <div className="recipe-name">
        <a href={findRecipe.link} target="_blank" rel="noreferrer noopener" >
          {findRecipe.recipeName}
        </a>
      </div>
      <div className="prep-time">
        Prep Time: {findRecipe.prepTime} min
      </div>
      <div className="cook-time">
        Cook Time: {findRecipe.cookTime} min
      </div>
      <div className="oven-temp">
        Oven Prep: {findRecipe.ovenTemp}
      </div>
      <div className="hardware">
        Hardware:
      </div>
      <div className="hardware-list">
        <ul>
          {findRecipe.hardware.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className="ingredients">
        Ingredients:
      </div>
      <div className="ingredients-list">
        <ul>
          {findRecipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className="directions">
        Directions:
      </div>
      <div className="directions-list">
        <ol>
          {findRecipe.directions.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      </div>
      <div className="notes">
        Notes:
      </div>
      <div className="notes-list">
        <ul>
          {findRecipe.notes.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeId: state.ui.selectedRecipeId
  }
}

export default connect(
  mapStateToProps
)(RecipeSelected);