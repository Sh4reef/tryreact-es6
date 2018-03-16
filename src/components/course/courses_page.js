import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import CourseList from './course_list';

class CoursePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 mt-4">Courses</h1>
        <Link to="/course" className="btn btn-primary my-4">Add Course</Link>
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
  }
};

export default connect(mapStateToProps)(CoursePage);