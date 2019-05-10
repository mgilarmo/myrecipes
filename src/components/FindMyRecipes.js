import React from 'react';
import SearchResults from './main/SearchResults';
import RecipeSelected from './main/RecipeSelected';
import Videos from './main/Videos';
import '../css/FindMyRecipes.css';


const FindMyRecipes = () => {
  return (
    <div>
      <div>
        <SearchResults />
      </div>
      <div className="recipe-selected-grid">
        <div className="recipe-selected">
          <RecipeSelected />
        </div>
        <div className="recipe-videos">
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default FindMyRecipes;