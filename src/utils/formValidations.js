import * as Yup from 'yup';

const emailValid = Yup.string()
  .email('Invalid email format')
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Email is required');

const passwordValid = Yup.string()
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .matches(/[a-zA-Z]/, 'Must contain a letter')
  .matches(/[0-9]/, 'Must contain numbers')
  .required('Password is required');

const nameValid = Yup.string()
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Name is required');

export const orderSchemaLogin = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaReg = Yup.object({
  name: nameValid,
  email: emailValid,
  password: passwordValid,
});

export const orderNannyesSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  number: Yup.string().required('Phone number is required'),
  age: Yup.number().required("Child's age is required"),
  time: Yup.string().required('Time is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  pearents: Yup.string().required("Parent's name is required"),
  comment: Yup.string().required('Comment is required'),
});
