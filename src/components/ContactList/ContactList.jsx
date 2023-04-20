import Contact from 'components/Contact/Contact';
import { selectSearchContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { List, Typography } from '@mui/material';

export default function ContactList() {
  const list = useSelector(selectSearchContacts);

  return (
    <>
      {list.length === 0 ? (
        <Typography>You don't have contacts in your phonebook</Typography>
      ) : (
        <List>
          {list.map(contact => (
            <Contact key={contact.id} contact={contact}></Contact>
          ))}
        </List>
      )}
    </>
  );
}
