import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Full name is required'),
  email: yup
    .string()
    .required('Valid email is required.')
    .email('Please enter a valid email address.'),

  password: yup.string().min(8, 'Password must be at least 8 characters long'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
 
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Valid email is required.')
    .email('Please enter a valid email address.'),
  password: yup.string().required('Password is required.')
});

