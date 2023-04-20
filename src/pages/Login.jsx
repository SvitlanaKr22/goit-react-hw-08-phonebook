//import { Helmet } from 'react-helmet'; // устарела
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from 'components/LoginForm/LoginForm';
import { Box } from '@mui/material';

export default function Login() {
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
      </Box>
    </HelmetProvider>
  );
}
