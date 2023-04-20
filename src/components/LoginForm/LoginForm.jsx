import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box } from '@mui/material';
import {
  Label,
  Form,
  Field,
  ErrorMessage,
  Button,
} from 'components/ContactForm/ContactForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispath = useDispatch();
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
          dispath(logIn(values));
          actions.resetForm();
        }}
      >
        <Form>
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
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
