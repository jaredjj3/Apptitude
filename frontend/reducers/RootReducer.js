import { combineReducers } from 'redux';

import { NullReducer } from './NullReducer';

export default combineReducers({
  null: NullReducer
});