import { Snackbar, Alert, AlertTitle } from '@mui/material';
export const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
    </Snackbar>
  );
};
