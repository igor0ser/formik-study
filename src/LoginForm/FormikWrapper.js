import React, { Component } from 'react';
import { Formik } from 'formik';
import noop from 'lodash/noop';
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

class FormikWrapper extends Component {
  outsideSumbit = noop

  renderFormComponent = (formikProps) => {
    this.outsideSumbit = formikProps.submitForm
    return <Form {...formikProps} />;
  }

  render() {
    return (
      <div className="FormikWrapper">
        <h2>Login</h2>
        <Formik
          render={this.renderFormComponent}
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validationSchema}
        />
        <button onClick={this.outsideSumbit}>Submit outside</button>
      </div>
    );
  }
}

export default FormikWrapper;