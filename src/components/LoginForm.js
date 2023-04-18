'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { forms } from '@/utils/forms';
import { loginUser } from '@/services/services';
import FormControl from './FormControl';
import Alert from './Alert';
import '../styles/LoginRegisterPages.css';

const { initialValues, validation, fields, title } = forms.login;

function LoginForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    setError(null);
    setLoading(true);
    const response = await loginUser(values);
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(data.message);
      return;
    }
    localStorage.setItem('authToken', JSON.stringify(data));
    router.push('/')
  };

  return (
    <Formik
      className='main-div_form'
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <>
        {error && <Alert alert='alert-error'>{error}</Alert>}
        <Form className='form'>
          <h3 className='form-h3'>{title}</h3>
          {fields.map((field) => (
            <FormControl
              key={field.name}
              ty={field.type}
              phl={field.placeholder}
              name={field.name}
            />
          ))}
          <div className='form-links'>
            <Link href='/register'>Do you already have an account?</Link>
          </div>
          <button className='btn btn-add' type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Ok'}
          </button>
        </Form>
      </>
    </Formik>
  );
}

export default LoginForm;
