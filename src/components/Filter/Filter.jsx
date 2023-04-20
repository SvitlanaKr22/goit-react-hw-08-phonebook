import { Formik } from 'formik';
import { Label } from './Filter.styled';
//import { Form, Label, Field } from './ContactForm.styled';
import { Form, Field } from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <Formik initialValues={{ name: '' }}>
      <Form>
        <Label>
          Find contact by name
          <Field
            type="text"
            name="name"
            value={value}
            onChange={handleChange}
          />
        </Label>
      </Form>
    </Formik>
  );
};

export default Filter;
