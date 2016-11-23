
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import notes from './notes';
import note from './note';

export default combineReducers({
  routing,
  todos,
  notes,
  note
})
