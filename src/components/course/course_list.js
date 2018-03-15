import React from 'react';
import PropTypes from 'prop-types';

const CourseList = ({courses}) => {
  const createCourseRow = (course, index) => {
    return (
      courses.map((course, index) => {
        return (
          <tr key={index}>
            <td><button className="btn btn-link">Delete</button></td>
            <td><button className="btn btn-link">Watch</button></td>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
          </tr>
        )
      })
    )
  }
  return (
    <div className="courses">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Length</th>
          </tr>
        </thead>
        <tbody>
            {createCourseRow(courses)}
        </tbody>
      </table>
      
    </div>
  )
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
}

export default CourseList;