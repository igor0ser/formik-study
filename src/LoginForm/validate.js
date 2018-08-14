import * as yup from 'yup'; 

export const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Required')
    .email('Invalid email address'),
  password: yup.string()
    .required('Required')
    .min(8, 'Password should be equal or more then 8 symbols'),
});

/*
const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!regexpEmail.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password should be equal or more then 8 symbols';
  }

  return errors;
}
*/