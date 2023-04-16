'use client';

import { Formik, Form } from 'formik';
import FormControl from './FormControl';
import { formType } from '@/libs/formType';

function AppForm({ type }) {
  const { initialValues, validation, fields, title, onSubmit } = formType[type];

  return (
    <Formik
      className='main-div_form'
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <>
        <h3>{title}</h3>
        <Form className='form'>
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

export default AppForm;
