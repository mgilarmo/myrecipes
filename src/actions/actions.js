import youtube from '../apis/youtube';
import Firebase from '../apis/firebase';
import app from 'firebase/app';
import history from '../components/history';


import {
  ADD_FIREBASE_TO_STORE,
  CREATE_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  FETCH_RECIPES,
  FETCH_VIDEOS,
  GENERIC,
  SEARCHING_RECIPES, 
  SELECT_RECIPE_CARD,
  SIGN_IN, 
  SIGN_OUT, 
  TOGGLE_BOOLEAN, 
  WIZARD_PAGE_NEXT,
  WIZARD_PAGE_PREVIOUS
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

const firebaseConfig = {
  apiKey: "AIzaSyBqEZartVLP4lj1lXTbeIsXdhObqb7e85A",
  authDomain: "myrecipes-53223.firebaseapp.com",
  databaseURL: "https://myrecipes-53223.firebaseio.com",
  projectId: "myrecipes-53223",
  storageBucket: "myrecipes-53223.appspot.com",
  messagingSenderId: "10245129962",
  appId: "1:10245129962:web:2f91a6dd47aafb57"
};


export const initializeFirebase = () => async (dispatch) => {
  const init = await app.initializeApp(firebaseConfig);
  const recipes = init.database().ref('recipes');

  recipes.on('child_added', (data) => {
    dispatch({ type: CREATE_RECIPE, payload: data.val()})
  })

  recipes.on('child_removed', (data) => {
    dispatch({ type: DELETE_RECIPE, payload: data.key})
    console.log(data.key);

  })
  
  

  dispatch({ type: ADD_FIREBASE_TO_STORE, payload: init })
}

export const createRecipe = (formValues) => async (dispatch, getState) => {
  const id = Date.now();
  const recipes = getState().recipes.firebase.database().ref('recipes/' + id)
  console.log(formValues)
  const update = {
    id
  }

  Object.keys(formValues).forEach((key) => {
    if (typeof formValues[key] === 'object'){
      update[key] = Object.values(formValues[key])
    } else {
      update[key] = formValues[key]
    }
  })

  await recipes.set(update);
  history.push('/');
};

export const editRecipe = (id, formValues) => async (dispatch) => {
  const response = await Firebase.recipe(id).set(formValues);
  dispatch({type: EDIT_RECIPE, payload: response})
};

export const deleteRecipe = (id) => async (dispatch, getState) => {
  const removeRecipe = getState().recipes.firebase.database().ref(`recipes/${id}`)
  history.push('/');

  await removeRecipe.remove();
  // dispatch({type: DELETE_RECIPE, payload: response})
};

export const fetchRecipes = (firebase) => async (dispatch) => {
  const recipes = [];
  await firebase.database().ref('recipes').once('value', (snapshot) => {
    snapshot.forEach((ele) => {
      recipes.push(ele.val())
    })
  });
  dispatch({type: FETCH_RECIPES, payload: recipes})
};


export const wizardPageNext = () => {
  return {
    type: WIZARD_PAGE_NEXT,
    payload: 1
  };
};
 
export const wizardPagePrevious = () => {
  return {
    type: WIZARD_PAGE_PREVIOUS,
    payload: -1
  };
};
