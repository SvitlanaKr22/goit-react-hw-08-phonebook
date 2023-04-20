import { Box, Typography } from '@mui/material';
export const Phonebook = () => {
  return (
    <Box
      sx={{
        height: ' 100vh',
        backgroundColor: '#42a5f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: ' 60vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#42a5f5',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: '#fff',
            fontWeight: '700',
          }}
        >
          Phonebook
        </Typography>
      </Box>
    </Box>
  );
};
