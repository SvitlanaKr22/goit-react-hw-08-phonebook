import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Box, Header, HeaderContacts } from 'components/ContactsBox.styled';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { CirclesWithBar } from 'react-loader-spinner';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box>
      <Header>Phonebook</Header>
      <ContactForm />
      <HeaderContacts>Contacts</HeaderContacts>
      <Filter />
      {isLoading && !error && (
        <CirclesWithBar
          height="100"
          width="100"
          color="#9555af"
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
  );
};

export default Contacts;
