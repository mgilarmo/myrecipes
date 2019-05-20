import {
  WIZARD_PAGE_NEXT,
  WIZARD_PAGE_PREVIOUS
} from '../actions/types';


const INITIAL_STATE = {
  page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WIZARD_PAGE_NEXT:
    case WIZARD_PAGE_PREVIOUS:
      return {
        ...state,
        page: state.page + action.payload
      };
    default:
      return state;
  }
};


