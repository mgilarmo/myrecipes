import Recipes from '../components/main/Recipes';

import {
  CREATE_RECIPE,
  EDIT_RECIPE
} from '../actions/types';


const INITIAL_STATE = {
  recipes: Recipes
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        ...state,
        ...{
          ...action.payload, 
          ingredients: Object.values(action.payload.ingredients),
          direction: Object.values(action.payload.direction),
          notes: Object.values(action.payload.notes)
        },
      };
    case EDIT_RECIPE:
      return {
        ...state,
        ...{
          ...action.payload, 
          ingredients: Object.values(action.payload.ingredients),
          direction: Object.values(action.payload.direction),
          notes: Object.values(action.payload.notes)
        },
      };
    default:
      return state;
  }
};
