'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { forms } from '@/utils/forms';
import { registerUser } from '@/services/services';
import FormControl from './FormControl';
import Alert from './Alert';
import '../styles/LoginRegisterPages.css';

const { initialValues, validation, fields, title } = forms.register;

function RegisterForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    setError(null);
    setLoading(true);
    const response = await registerUser(values);
    const data = await response.json();
    setLoading(false);
    const message = data.message || 'User or email already exists';
    if (!response.ok) {
      setError(message);
      return;
    }
    router.push('/login')
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
            <Link href='/login'>Are you not registered?</Link>
          </div>
          <button className='btn btn-add' type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </button>
        </Form>
      </>
    </Formik>
  );
}

export default RegisterForm;
