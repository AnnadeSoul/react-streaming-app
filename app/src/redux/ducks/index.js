import { combineReducers } from 'redux';

import compareValues from './compareValues';
import stockTicker from './stockTicker';

export default combineReducers({
  stockTicker,
  compareValues
});