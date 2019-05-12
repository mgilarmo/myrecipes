import {combineReducers} from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  form: formReducer
});