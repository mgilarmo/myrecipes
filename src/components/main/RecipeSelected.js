import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../css/main/RecipeSelected.css';


const RecipeSelected = (props) => {

  const findRecipe = props.recipes.find(recipe => recipe.id === props.selectedRecipeId);

  if(!findRecipe) {
    return <div></div>;
  }
  return (
    <div className="selected-recipe">
      <div className="edit-delete-recipe">
        <Link to={`/edit/${props.selectedRecipeId}`}>
          <button className="edit-recipe">
            <i className="fas fa-pen" />
          </button>
        </Link>
        <Link to={`/delete/${props.selectedRecipeId}`}>
          <button className="delete-recipe">
            <i className="fas fa-trash-alt" />
          </button>
        </Link>
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
        {findRecipe.hardware ? findRecipe.hardware : 'none'}
      </div>
      <div className="ingredients">
        Ingredients:
      </div>
      <div className="ingredients-list">
        <ul>
          {findRecipe.ingredients ? findRecipe.ingredients.map((item, i) => <li key={i}>{item}</li>) : <li>none</li>}
        </ul>
      </div>
      <div className="directions">
        Directions:
      </div>
      <div className="directions-list">
        <ol>
          {findRecipe.directions ? findRecipe.directions.map((item, i) => <li key={i}>{item}</li>) : <li>none</li>}
        </ol>
      </div>
      <div className="notes">
        Notes:
      </div>
      <div className="notes-list">
        <ul>
        {findRecipe.notes ? findRecipe.notes.map((item, i) => <li key={i}>{item}</li>) : <li>none</li>}
        </ul>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeId: state.ui.selectedRecipeId,
    recipes: state.recipes.recipes
  }
}

export default connect(
  mapStateToProps
)(RecipeSelected);