import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Spinner from 'react-spinkit';


const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const CourseList = ({courses, loading}) => {
  const createSpinner = () => {
    return (
      <Spinner fadeIn="none" style={spinnerStyle} />
    )
  }
  const createCourseRow = (course, index) => {
    return (
      courses.map((course, index) => {
        return (
          <tr key={index}>
            <td><button className="btn btn-link">Watch</button></td>
            <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
          </tr>
        )
      })
    )
  }
  const createCoursesTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Length</th>
          </tr>
        </thead>
        <tbody>
          {createCourseRow(courses)}
        </tbody>
      </table>
    )
  }
  return (
    <div className="courses">
      {!loading ? createCoursesTable() : createSpinner()}
    </div>
  )
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default CourseList;