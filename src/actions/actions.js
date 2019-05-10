import youtube from '../apis/youtube';

import {
  FETCH_VIDEOS,
  SEARCHING_RECIPES, 
  SELECT_RECIPE_CARD,
  SIGN_IN, 
  SIGN_OUT, 
  TOGGLE_BOOLEAN, 
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const searchingRecipes = (term) => {
  return {
    type: SEARCHING_RECIPES,
    payload: term
  };
  // set selectedRecipeID: '', videos=[], showAllRecipes=false
};

export const toggleBoolean = (stateToToggle) => (dispatch, getState) => {
  const newState = getState().stateToToggle ? false : true;
  dispatch({
    type: TOGGLE_BOOLEAN, 
    payload: {
      state: [stateToToggle], 
      stateChange: newState
    }
  })
};


export const selectRecipeCard = (id, name) => {
  return {
    type: SELECT_RECIPE_CARD,
    payload: {id, name}
  };
};

export const fetchYouTubeVideos = (selectedRecipeName) => async (dispatch) => {
  const response = await youtube.get(
    '/search', {
      params: {
        q: selectedRecipeName
      }
    }
  );
  dispatch({type: FETCH_VIDEOS, payload: response});
};
