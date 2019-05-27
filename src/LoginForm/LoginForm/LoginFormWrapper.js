import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import noop from 'lodash/noop';
import { LoginForm } from './LoginForm';
import { validationSchema } from '../validate';
import { Debug } from '../../Debug'

import './styles.css';

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

export class LoginFormWrapper extends Component {
  outsideSumbit = noop

  renderFormComponent = (formikProps) => {
    this.outsideSumbit = formikProps.submitForm
    return (
      <Fragment>
        <LoginForm {...formikProps} />
        <Debug/>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="LoginFormWrapper">
        <h2>Login</h2>
        <Formik
          render={this.renderFormComponent}
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validationSchema}
        >
        </Formik>
        <button onClick={this.outsideSumbit}>Submit outside</button>
      </div>
    );
  }
}
