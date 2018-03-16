import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../common/text_input';
import SelectInput from '../common/select_input';

const CourseForm = ({course, allAuthors, onChange, onRevert, errors, onSave, submitted}) => {
  return (
    <div className="container">
      <h1 className="display-4 my-4">Manage Course</h1>
      <form className={submitted ? 'needs-validation was-validated' : ''}>
        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          placeholder="Title"
          minLength={10}
          required={true}
          feedback={errors.title}/>
        <SelectInput
          name="authorId"
          value={course.authorId}
          onChange={onChange}
          options={allAuthors}
          required={true}
          defaultValue={course.authorId}
          feedback={errors.authorId} />
        <TextInput
          name="category"
          label="Category"
          value={course.category}
          onChange={onChange}
          placeholder="Category"
          minLength={2}
          required={true}
          feedback={errors.category} />
        <TextInput
          name="length"
          label="Length"
          value={course.length}
          onChange={onChange}
          placeholder="Length"
          required={true}
          pattern="^(\d{1,3}:\d{1,2})$"
          feedback={errors.length} />
        <button className="btn btn-primary" onClick={onSave}>Save</button>
        <button className="btn btn-warning ml-3" onClick={onRevert}>Revert</button>
      </form>
    </div>
  )
}

CourseForm.propTypes = {

}

export default CourseForm;