'use client';

import { Field } from 'formik';

function Input({ ty, phl, nm }) {
  return <Field className='input' name={nm} type={ty} placeholder={phl} />;
}

export default Input;
