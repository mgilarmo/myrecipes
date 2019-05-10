import {
  FETCH_VIDEOS,
  SEARCHING_RECIPES,
  SELECT_RECIPE_CARD,
  TOGGLE_BOOLEAN
} from '../actions/types';


const INITIAL_STATE = {
  mobileMenu: false,
  selectedRecipeId: '',
  selectedRecipeName: '',
  showAllRecipes: false,
  term: '',
  videos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BOOLEAN:
      return {
        ...state,
        [action.payload]: !state.action.payload ? true : false
      };
    case SEARCHING_RECIPES:
      return {
        ...state,
        term: action.payload
      };
    case SELECT_RECIPE_CARD:
      return {
        ...state,
        selectedRecipeId: action.payload.id,
        selectedRecipeName: action.payload.name
      };
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
};


