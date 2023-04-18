import { loginValidation, registerValidation } from './validation';

export const forms = {
  login: {
    title: 'Login',
    initialValues: {
      email: '',
      password: ''
    },
    validation: loginValidation,
    fields: [
      {
        type: 'text',
        placeholder: 'Email',
        name: 'email'
      },
      {
        type: 'password',
        placeholder: 'Password',
        name: 'password'
      }
    ]
  },
  register: {
    title: 'Register',
    initialValues: {
      id: '',
      name: '',
      lastname: '',
      age: '',
      email: '',
      password: ''
    },
    validation: registerValidation,
    fields: [
      {
        type: 'text',
        placeholder: 'Username',
        name: 'id'
      },
      {
        type: 'text',
        placeholder: 'Name',
        name: 'name'
      },
      {
        type: 'text',
        placeholder: 'Lastname',
        name: 'lastname'
      },
      {
        type: 'number',
        placeholder: 'Age',
        name: 'age'
      },
      {
        type: 'text',
        placeholder: 'Email',
        name: 'email'
      },
      {
        type: 'password',
        placeholder: 'Password',
        name: 'password'
      }
    ]
  }
};
