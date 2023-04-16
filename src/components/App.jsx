import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Layout, Header, HeaderContacts } from './Layout';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
// import { CirclesWithBar } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
  // <Layout>
  //   <Header>Phonebook</Header>
  //   <ContactForm />
  //   <HeaderContacts>Contacts</HeaderContacts>
  //   <Filter />
  //   {isLoading && !error && (
  //     <CirclesWithBar
  //       height="100"
  //       width="100"
  //       color="#9555af"
  //       wrapperStyle={{}}
  //       wrapperClass=""
  //       visible={true}
  //       outerCircleColor=""
  //       innerCircleColor=""
  //       barColor=""
  //       ariaLabel="circles-with-bar-loading"
  //     />
  //   )}
  //   <ContactList />
  // </Layout>
};
