'use client';

import { Field } from 'formik';
import '../styles/Input.css';

function Input({ ty, phl, nm }) {
  return <Field className='input' name={nm} type={ty} placeholder={phl} autoComplete='off' />;
}

export default Input;
