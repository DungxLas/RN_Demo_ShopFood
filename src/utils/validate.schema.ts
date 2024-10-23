import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password cannot be blank'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email cannot be blank'),
    name: Yup.string()
        .required('Name cannot be blank')
});
