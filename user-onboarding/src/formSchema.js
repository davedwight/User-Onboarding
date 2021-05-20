import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Username must be at least three characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, 'Password must contain at least 8 characters must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'),
    terms: yup
        .boolean()
        .required('You must accept the Terms of Service'),
})

export default formSchema;