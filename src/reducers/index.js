import {combineReducers} from 'redux';

import authors from './author';
import courses from './course';

const rootReducer = combineReducers({
  authors,
  courses
})

export default rootReducer;