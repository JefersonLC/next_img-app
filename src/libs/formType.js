import { loginUser } from '@/services/services';
import * as Yup from 'yup';

export const formType = {
  login: {
    title: 'Iniciar Sesión',
    initialValues: {
      email: '',
      password: ''
    },
    validation: Yup.object({
      email: Yup.string().email('Formato inválido').required('Campo requerido'),
      password: Yup.string()
        .min(8, 'Mínimo 8 caracteres')
        .required('Campo requerido')
    }),
    fields: [
      {
        type: 'text',
        placeholder: 'Correo electrónico',
        name: 'email'
      },
      {
        type: 'password',
        placeholder: 'Contraseña',
        name: 'password'
      }
    ],
    onSubmit: loginUser
  },
  register: {}
};
