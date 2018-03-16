import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  label,
  value,
  options,
  onChange,
  defaultValue,
  required,
  feedback
}) => {
  return (
    <div className="form-group">
      <select
        name={name}
        className="custom-select"
        value={value}
        onChange={onChange}
        required={required}>
        {
          !defaultValue ? <option value="">Select</option> : null
        }
        {
          options.map(option => {
            return <option
                      key={option.value}
                      value={option.value}
                      defaultValue={defaultValue}>
                      {option.text}
                      </option>
          })
        }
      </select>
      <div className="invalid-feedback">
        {feedback}
      </div>
    </div>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  required: PropTypes.bool,
  feedback: PropTypes.string
}

export default SelectInput;