import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  // console.log('isLoggedIn', isLoggedIn, isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // console.log(Component);
  // console.log(redirectTo);

  // console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
