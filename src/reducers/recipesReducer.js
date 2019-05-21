import {
  ADD_FIREBASE_TO_STORE,
  CREATE_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  FETCH_RECIPES
} from '../actions/types';


const INITIAL_STATE = {
  recipes: [],
  firebase: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIREBASE_TO_STORE:
      return {
        ...state,
        firebase: action.payload
      }
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case EDIT_RECIPE:
      console.log(action.payload);
      return {
        ...state,
        recipes: [...state.recipes.map((recipe) => recipe.id === action.payload.id ? action.payload : recipe)]
      };
    case DELETE_RECIPE:
      return {
        ...state, 
        recipes: [...state.recipes.filter((recipe) => recipe.id !== action.payload.id)]
      }
    default:
      return state;
  }
};


