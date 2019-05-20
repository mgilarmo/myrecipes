import {combineReducers} from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import {reducer as formReducer} from 'redux-form';
import recipesReducer from './recipesReducer';
import wizardPageReducer from './wizardPageReducer';


export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  recipes: recipesReducer,
  wizardPage: wizardPageReducer,
  form: formReducer
});