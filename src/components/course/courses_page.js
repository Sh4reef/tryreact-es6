import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../actions/course_actions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: {title: ''}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onTitleChange(event) {
    let course = this.state.course;
    course = {title: event.target.value};
    this.setState({
      course: course
    })
  }
  onSave(event) {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Courses</h1>
        <hr className="my-4" />
        {this.props.courses.map((course, index) => {
          return (<p key={index}>{course.title}</p>)
        })}
        <form>
          <div className="form-group">
            <input
                  className="form-control"
                  value={this.state.course.title}
                  onChange={this.onTitleChange} />
          </div>
          <button
                className="btn btn-primary btn-md"
                onClick={this.onSave}>Save</button>
        </form>
      </div>
    )
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);