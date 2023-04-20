//import { Helmet } from 'react-helmet'; // устарела
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from 'components/LoginForm/LoginForm';
import { selectUserError } from 'redux/auth/selectors';
import { Box, Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Login() {
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
          <title>Login</title>
        </Helmet>
        <LoginForm />
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
