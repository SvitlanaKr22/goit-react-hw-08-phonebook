//import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { selectUserError } from 'redux/auth/selectors';
import { Box, Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Register() {
  const error = useSelector(selectUserError);
  return (
    <HelmetProvider>
      <Box
        sx={{
          display: 'flex',
          height: ' 100vh',
          justifyContent: 'center',
          alignItems: 'start',
          backgroundColor: '#a1d1f8',
        }}
      >
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An error occurred — <strong>{error}</strong>
          </Alert>
        )}
      </Box>
    </HelmetProvider>
  );
}
