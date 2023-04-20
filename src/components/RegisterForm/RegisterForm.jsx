import { Formik } from 'formik';
import * as Yup from 'yup';
import { Label } from './RegisterForm.styled';
import {
  Form,
  Field,
  ErrorMessage,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from '@mui/material';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form>
          <Label>
            User name
            <Field type="text" name="name" title="User Name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            Email
            <Field type="email" name="email" title="User email" />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            Password
            <Field type="text" name="password" title="User password" />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;
