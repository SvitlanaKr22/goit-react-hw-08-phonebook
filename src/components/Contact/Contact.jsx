import PropTypes from 'prop-types';
import { ContactItem } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Typography, IconButton, Divider, Grid } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <ContactItem>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
          // sx={{
          //   marginTop: '20px',
          // }}
        >
          <Grid item xs={5}>
            <Typography sx={{ fontSize: '1em', textAlign: 'left' }}>
              {contact.name + ': '}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography sx={{ fontSize: '1em', textAlign: 'left' }}>
              {contact.number}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton aria-label="delete" size="large" onClick={handleDelete}>
              <DeleteForever fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </ContactItem>

      <Divider />
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
