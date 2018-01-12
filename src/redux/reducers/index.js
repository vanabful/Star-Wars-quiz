import {combineReducers} from 'redux';
import form from './form';
import questions from './questions';

let reducers = {
    form,
    questions
  };
  
  const rootReducer = combineReducers(reducers);

export default rootReducer;

