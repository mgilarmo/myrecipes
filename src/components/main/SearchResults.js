import React from 'react';
import {connect} from 'react-redux';
import Recipes from './Recipes';
import {showRecipeAndVideos} from '../../actions/actions';
import '../../css/main/SearchResults.css';


const SearchResults = (props) => {
  console.log(props.term);
  console.log(props.showAllRecipes);
  let filteredRecipes = []
  if(props.showAllRecipes) {
    filteredRecipes = Recipes;
  } else {
    filteredRecipes = props.term !== undefined && props.term.length > 0 ? 
      Recipes.filter((recipe) => 
        JSON.stringify(recipe).toLowerCase().indexOf(props.term.toLowerCase()) > -1) :
    [];    
  }
  return (
    <div>
      {filteredRecipes.map((recipe) => 
        <div 
          className="recipe-card"
          key = {recipe.id} 
          onClick = {() => {
            props.showRecipeAndVideos(recipe.id, recipe.recipeName)
          }} 
        >
          {recipe.recipeName}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.ui.term,
    showAllRecipes: state.ui.showAllRecipes
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showRecipeAndVideos: dispatch(showRecipeAndVideos)
//   }
// };

export default connect(
  mapStateToProps,
  {showRecipeAndVideos}
)(SearchResults);