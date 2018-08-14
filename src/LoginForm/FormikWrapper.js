import React from 'react';
import { Formik } from 'formik';
import Form from './Form/Form';
import { validationSchema } from './validate';

import './FormikWrapper.css';

const initialValues = {
  email: '',
  password: '',
};

const submit = (values, actions) => {
  console.group('submit');
  console.log(values);
  console.log(actions);
  console.groupEnd();
}

const FormikWrapper = () => {
  return (
    <div className="FormikWrapper">
      <h2>Login</h2>
      <Formik
        component={Form}
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
        // validate={validate}
        // validateOnBlur={false}
        // validateOnChange={false}
      />
    </div>
  );
}

export default FormikWrapper;