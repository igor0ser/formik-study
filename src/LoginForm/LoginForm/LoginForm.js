import React from 'react';
import { MyField } from '../MyField/MyField.js';

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="LoginForm">
      <MyField
        name="email"
        placeholder="test@email.com"
        {...props}
      />
      <MyField
        name="password"
        {...props}
      />
      <button type="submit">
        Submit
      </button>
      <hr />
    </form>
  );
};
