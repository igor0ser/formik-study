import React from 'react';
import capitalize from 'lodash/capitalize';
import './MyField.css';

export const MyField = ({
  label,
  name,
  type,
  placeholder,
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => (
  <label className="field">
    {label || capitalize(name)}:
    <input
        name={name}
        type={type || name}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
    />
    {touched[name] && errors[name] && (
      <div className="field__error">
        {errors[name]}
      </div>
    )}
  </label>
);
