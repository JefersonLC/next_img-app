'use client';

import { ErrorMessage } from 'formik';
import Input from './Input';

function FormControl({ ty, phl, name }) {
  return (
    <div className='form-control'>
      <Input ty={ty} phl={phl} nm={name} />
      <ErrorMessage className='span-error' name={name} component='span' />
    </div>
  );
}

export default FormControl;
