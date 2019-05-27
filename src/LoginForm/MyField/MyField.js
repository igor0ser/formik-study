import React from 'react';
import capitalize from 'lodash/capitalize';
import { Field, ErrorMessage } from 'formik'
import './MyField.css';

const MyErrorMessage = ({ children }) => (
  <div className="field__error">
    {children}
  </div>
)

export const MyField = ({
  label,
  name,
  type,
  placeholder,
}) => (
  <label className="field">
    {label || capitalize(name)}:
    <Field
      name={name}
      type={type || name}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} component={MyErrorMessage} />
  </label>
);
