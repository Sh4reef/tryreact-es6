import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
} from '../actions/action_types';

const courseReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses
    case CREATE_COURSE_SUCCESS:
      return [
        action.course,
        ...state
      ]
    case UPDATE_COURSE_SUCCESS:
      return [
        action.course,
        ...state.filter(course => course.id !== action.course.id)        
      ]
    default:
      return state;
  }
}

export default courseReducer;