import React from 'react';
import { Form } from 'formik'
import { MyField } from '../MyField/MyField.js';

export const LoginForm = (props) => {
  return (
    <Form className="LoginForm">
      <MyField
        name="email"
        placeholder="test@email.com"
      />
      <MyField
        name="password"
      />
      <button type="submit">
        Submit
      </button>
    </Form>
  );
};
