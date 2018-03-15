import CourseApi from '../api/mockCourseApi';
import {LOAD_COURSES_SUCCESS} from './action_types';

export const loadCoursesSuccess = (courses) => {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  }
}

export const loadCourses = () => {
  return dispatch => {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw(error);
    })
  }
}