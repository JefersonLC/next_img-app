'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
import Alert from './Alert';
import { forms } from '@/utils/forms';
import { loginUser } from '@/services/services';
import '../styles/LoginRegisterPages.css';

const { initialValues, validation, fields, title } = forms.login;

function LoginForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    const response = await loginUser(values);
    const data = await response.json();
    if (!response.ok) {
      setError(data.message);
      return;
    }
    localStorage.setItem('authToken', JSON.stringify(data));
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
          <button type='submit'>Enviar</button>
        </Form>
      </>
    </Formik>
  );
}

export default LoginForm;
