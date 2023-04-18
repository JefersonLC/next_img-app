import * as Yup from 'yup';

const id = Yup.string()
  .min(2, 'Min length is 2')
  .max(100, 'Max length is 100')
  .typeError('Must be text');
const name = Yup.string()
  .min(2, 'Min length is 2')
  .max(100, 'Max length is 100')
  .typeError('Must be text');
const lastname = Yup.string()
  .min(2, 'Min length is 2')
  .max(100, 'Max length is 100')
  .typeError('Must be text');
const age = Yup.number()
  .integer('Must be an integer')
  .typeError('Must be a number');
const email = Yup.string()
  .email('Invalid format')
  .typeError('Must be text');
const password = Yup.string()
  .min(8, 'Min length is 8')
  .max(100, 'Max length is 100')
  .typeError('Must be text');

export const loginValidation = Yup.object({
  email: email.required('Email is required'),
  password: password.required('Password is required')
});
export const registerValidation = Yup.object({
  id: id.required('Required'),
  name: name.required('Name is required'),
  lastname: lastname.required('Lastname is required'),
  age: age.required('Age is required'),
  email: email.required('Email is required'),
  password: password.required('Password is required')
});
