import youtube from '../apis/youtube';

import {
  FETCH_VIDEOS,
  GENERIC,
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
};

export const toggleBoolean = (stateToToggle) => (dispatch, getState) => {
  const newState = getState().ui[stateToToggle] ? false : true;

  if (stateToToggle === 'showAllRecipes') {
    dispatch({
      type: GENERIC,
      payload: {
        term: '',
        selectedRecipeId: '',
        selectedRecipeName: '',
        videos: []
      }
    })
  }
  return dispatch({
    type: TOGGLE_BOOLEAN, 
    payload: {
      state: [stateToToggle], 
      stateChange: newState
    }
  })
};

export const showRecipeAndVideos = (id, name) => (dispatch) => {
  dispatch(selectRecipeCard(id, name));
  dispatch(fetchYouTubeVideos(name));
};

export const selectRecipeCard = (id, name) => {
  return {
    type: SELECT_RECIPE_CARD,
    payload: {id, name}
  };
};

export const fetchYouTubeVideos = (name) => async (dispatch) => {
  const response = await youtube.get(
    '/search', {
      params: {
        q: name
      }
    }
  );
  return dispatch({type: FETCH_VIDEOS, payload: response.data.items});
};


// USING PROMISE WITH .THEN()
// export const fetchYouTubeVideos = (name) => (dispatch) => {
//   return fetch(`https://www.googleapis.com/youtube/v3/search?q=${name}&part=snippet&maxResults=5&key=AIzaSyD6Stv0Gvx3yjZCG34Jc4PcKL2FCbkLIkw`)
//   .then((res) => {
//     return res.json()
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }