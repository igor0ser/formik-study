import React from 'react';
import capitalize from 'lodash/capitalize';
import './FormField.css';

const FormField = ({
  label, name, type, placeholder, required, values, handleChange, handleBlur, touched, errors
}) => (
  <label className="FormField">
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
      <div className="FormField__error">
        {errors[name]}
      </div>
    )}
  </label>
);

export default FormField;