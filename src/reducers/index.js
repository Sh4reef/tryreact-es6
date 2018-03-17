import {combineReducers} from 'redux';

import authors from './author';
import courses from './course';
import ajaxCallsInProgress from './ajax_call';

const rootReducer = combineReducers({
  authors,
  courses,
  ajaxCallsInProgress
})

export default rootReducer;