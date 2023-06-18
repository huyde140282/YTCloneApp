import * as Yup from 'yup';
import { LoginFormFormData } from '../types';
export const loginInputFields: Record<string, string>[] = [
  {
    label: 'Email',
    type: 'text',
    name: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];
export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
export const initialValues: LoginFormFormData = {
  email: '',
  password: '',
};
