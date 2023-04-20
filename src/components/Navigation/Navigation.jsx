import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Nav, Link } from './Navigation.styled';
import { Button, IconButton, Box } from '@mui/material';
import { Home } from '@mui/icons-material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <Link to="/">
        <IconButton size="large">
          <Home fontSize="inherit" />
        </IconButton>
      </Link>
      {isLoggedIn ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button sx={{ fontSize: '1rem' }}>
            <Link to="/contacts">Contacts</Link>
          </Button>

          <UserMenu />
        </Box>
      ) : (
        <div>
          <Button sx={{ fontSize: '1rem' }}>
            <Link to="/register">Register</Link>
          </Button>
          <Button sx={{ fontSize: '1rem' }}>
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      )}
    </Nav>
  );
};
