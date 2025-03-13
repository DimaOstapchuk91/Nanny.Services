import { useAuth } from '../../hooks/useAuth.js';
import AppNav from '../AppNav/AppNav.jsx';
import AuthMenu from '../AuthMenu/AuthMenu.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import s from './AppBar.module.css';

const AppBar = () => {
  const { user } = useAuth();

  return (
    <>
      <div className={s.appWrap}>
        <p className={s.logo}>Nanny.Services</p>
        <div className={s.appNavWrap}>
          <AppNav />
          {user ? <UserMenu /> : <AuthMenu />}
        </div>
      </div>
    </>
  );
};
export default AppBar;
