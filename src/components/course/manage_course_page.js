import React from 'react';
import {Prompt} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/course_actions';
import CourseForm from './course_form';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {
        title: '',
        authorId: '',
        category: '',
        length: '',
      },
      dirty: false,
      submitted: false
    };
    this.setCourseState = this.setCourseState.bind(this);
    this.saveCourseState = this.saveCourseState.bind(this);
    this.revertState = this.revertState.bind(this);
  };
  componentWillReceiveProps(nextProps) {
    if (!this.props.course) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      })
    }
  }
  setCourseState(event) {
    this.setState({dirty: true})
    const course = Object.assign({}, this.state.course);
    course[event.target.name] = event.target.value;
    this.setState({
      course: course
    });
  };
  revertState(event) {
    event.preventDefault();
    this.setState({
      course: Object.assign({}, this.props.course),
      dirty: false
    })
  }
  courseFormValid() {
    let formValid = true;
    let errors = {};
    const course = this.state.course;
    if (course.title.length < 10) {
      errors.title = 'Title must be at least 10 characters.';
      formValid = false;
    }
    if (course.authorId.length === 0) {
      errors.authorId = 'Please select an author.';
      formValid = false;
    }
    if (course.category.length < 2) {
      errors.category = 'Category must be at least 2 characters.';
      formValid = false;
    }
    const lengthRegex = /^(\d{1,3}:\d{1,2})$/
    if (!lengthRegex.test(course.length)) {
      errors.length = 'Length must be in this format hh:mm';
      formValid = false;
    }
    this.setState({
      errors: errors
    })
    return formValid
  }

  saveCourseState(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
    if (!this.courseFormValid()) {
      return
    }
    this.props.actions.saveCourse(this.state.course)
    this.props.history.push('/course/save')
  };

  render() {
    return (
      <div id="course-form">
        <Prompt
              when={this.state.dirty}
              message={location => {
                return location.pathname.startsWith('/course/save') ? true : 'Leaving without saving ?'
              }} />
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          onChange={this.setCourseState}
          onRevert={this.revertState}
          onSave={this.saveCourseState}
          errors={this.state.errors}
          submitted={this.state.submitted} />
      </div>
    );
  };
};

ManageCoursePage.propTypes = {
  course: PropTypes.object,
  authors: PropTypes.array,
  actions: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id
  let course = {
    id: "",
    title: "",
    watchHref: "",
    authorId: "",
    length: "",
    category: ""
  }
  if (courseId) {
    course = state.courses.find(course => {
      return course.id === courseId
    })
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);