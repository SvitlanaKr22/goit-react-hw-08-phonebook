import { Formik } from 'formik';
import { Form, Label, Field, ErrorMessage, Button } from './ContactForm.styled';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const checkContact = (contacts, name) => {
  if (contacts.find(contact => name === contact.name)) {
    alert(`${name} is already is contact`);
    return 1;
  } else return null;
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Incorrect format. Enter in format XXX-XXX-XXXX'
    )
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        const hasContact = checkContact(contacts, values.name);
        if (!hasContact) dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Phone
          <Field
            type="tel"
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
