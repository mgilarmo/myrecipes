import React from 'react';
import {connect} from 'react-redux';
import {showRecipeAndVideos} from '../../actions/actions';
import '../../css/main/SearchResults.css';


const SearchResults = (props) => {
  // sort an array of objects by key, https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  const compareValues = (key, order='asc') => (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    
    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return order === 'desc' ? (comparison * -1) : comparison;
  };
  
  let filteredRecipes = []
  let sortedRecipes = [...props.recipes].sort(compareValues('recipeName'))

  if(props.showAllRecipes) {
    filteredRecipes = sortedRecipes;
  } else {
    filteredRecipes = props.term.length > 0 ? 
    sortedRecipes.filter((recipe) => 
        JSON.stringify(recipe).toLowerCase().indexOf(props.term.toLowerCase()) > -1) :
    [];    
  }

  const searchResultsBorder = filteredRecipes.length > 0 ? " search-results-border" : "";
  return (
    <div className={`recipe-card-results${searchResultsBorder}`}>
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
    showAllRecipes: state.ui.showAllRecipes,
    recipes: state.recipes.recipes
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