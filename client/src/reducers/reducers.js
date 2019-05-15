import {combineReducers} from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import {reducer as formReducer} from 'redux-form';
import recipesReducer from './recipesReducer';


export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  form: formReducer,
  recipes: recipesReducer
});