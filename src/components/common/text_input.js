import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  onChange,
  value = '',
  label,
  placeholder,
  minLength,
  maxLength,
  required,
  pattern,
  feedback}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="text"
        className="form-control"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        pattern={pattern} />
      <div className="invalid-feedback">
        {feedback}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  feedback: PropTypes.string
}

export default TextInput;