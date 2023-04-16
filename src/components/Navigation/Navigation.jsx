import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log('isLoggedIn=', isLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}

      {isLoggedIn ? (
        <div>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </div>
      )}
    </Nav>
  );
};
