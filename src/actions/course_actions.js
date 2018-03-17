import CourseApi from '../api/mockCourseApi';
import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
} from './action_types';
import {beginAjaxCall} from './ajax_actions';

export const loadCoursesSuccess = (courses) => {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  }
}

export const createCourseSuccess = (course) => {
  return {
    type: CREATE_COURSE_SUCCESS,
    course
  }
}

export const updateCourseSuccess = (course) => {
  return {
    type: UPDATE_COURSE_SUCCESS,
    course
  }
}

export const loadCourses = () => {
  return (dispatch) => {
    dispatch(beginAjaxCall())
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw(error);
    })
  }
}

export const saveCourse = (course) => {
  return (dispatch) => {
    dispatch(beginAjaxCall())
    return CourseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse))
      : dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      throw(error);
    })
  }
}