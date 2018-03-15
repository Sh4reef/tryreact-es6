import {LOAD_COURSES_SUCCESS} from '../actions/action_types';

const courseReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state;
  }
}

export default courseReducer;