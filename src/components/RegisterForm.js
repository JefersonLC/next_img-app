'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
import Alert from './Alert';
import { forms } from '@/utils/forms';
import { registerUser } from '@/services/services';
import '../styles/LoginRegisterPages.css';

const { initialValues, validation, fields, title } = forms.register;

function RegisterForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    const response = await registerUser(values);
    const data = await response.json();
    const message = data.message || 'User or email already exists';
    if (!response.ok) {
      setError(message);
      return;
    }
  };

  return (
    <Formik
      className='main-div_form'
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <>
        {error && <Alert>{error}</Alert>}
        <Form className='form'>
          <h3>{title}</h3>
          {fields.map((field) => (
            <FormControl
              key={field.name}
              ty={field.type}
              phl={field.placeholder}
              name={field.name}
            />
          ))}
          <button type='submit'>Register</button>
        </Form>
      </>
    </Formik>
  );
}

export default RegisterForm;
