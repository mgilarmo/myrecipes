import {
  FETCH_VIDEOS,
  GENERIC,
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
    case GENERIC:
      return {
        ...state,
        ...action.payload,
      }
    case TOGGLE_BOOLEAN:
      return {
        ...state,
        [action.payload.state]: action.payload.stateChange
      };
    case SEARCHING_RECIPES:
      return {
        ...INITIAL_STATE,
        term: action.payload,
      };
    case SELECT_RECIPE_CARD:
      return {
        ...state,
        selectedRecipeId: action.payload.id,
        selectedRecipeName: action.payload.name,
        mobileMenu: INITIAL_STATE.mobileMenu
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


