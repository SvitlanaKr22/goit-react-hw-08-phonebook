import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { HeaderContacts } from 'components/ContactsBox.styled';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { CirclesWithBar } from 'react-loader-spinner';
import { Box } from '@mui/material';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <HeaderContacts>Your contacts:</HeaderContacts>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: '5px',
        }}
      >
        <Box sx={{ width: '50%' }}>
          <Filter />
          <ContactForm />
        </Box>
        <Box
          sx={{
            width: '45%',
            paddingRight: '30px',
          }}
        >
          {isLoading && !error && (
            <CirclesWithBar
              height="100"
              width="100"
              color="#42a5f5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel="circles-with-bar-loading"
            />
          )}
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
