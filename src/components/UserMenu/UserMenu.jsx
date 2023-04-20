import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography sx={{ fontSize: '1.4rem' }}>Welcome, {user.name}</Typography>
      <Button
        sx={{ fontSize: '1rem' }}
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        {' Logout'}
      </Button>
    </>
  );
};
