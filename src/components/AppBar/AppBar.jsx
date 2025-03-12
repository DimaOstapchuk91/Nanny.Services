import { useAuth } from '../../hooks/useAuth.js';
import AppNav from '../AppNav/AppNav.jsx';
import AuthMenu from '../AuthMenu/AuthMenu.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';

const AppBar = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <div className=''>
        <p>Nanny.Services</p>
        <AppNav />
        {user ? <UserMenu /> : <AuthMenu />}
      </div>
    </>
  );
};
export default AppBar;
