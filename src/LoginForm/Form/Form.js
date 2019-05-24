import React from 'react';
import FormField from '../FormField/FormField.js';

import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="Form">
      <FormField
        name="email"
        placeholder="test@email.com"
        {...props}
      />
      <FormField
        name="password"
        {...props}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form
