import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CourseList from './course_list';

class CoursePage extends React.Component {
  render() {
    return (
      <div className="">
        <h1 className="display-4 my-5">Courses</h1>
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
    courses: state.courses
  }
};

export default connect(mapStateToProps)(CoursePage);