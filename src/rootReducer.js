import { combineReducers } from 'redux';
import markets from './reducers/markets';
import companies from './reducers/companies';

export default combineReducers({
  markets,
  companies
});