import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import AppNav from '../AppNav/AppNav.jsx';
import AuthMenu from '../AuthMenu/AuthMenu.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import s from './AppBar.module.css';
import clsx from 'clsx';

const AppBar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={clsx(!isHome && s.appFix)}>
      <div className={clsx(s.appWrap, isHome ? s.absolute : s.fixed)}>
        <p className={s.logo}>Nanny.Services</p>
        <div className={clsx(s.appNavWrap, isHome ? s.navRight : s.appCenter)}>
          <AppNav />
          {user ? <UserMenu /> : <AuthMenu />}
        </div>
      </div>
    </div>
  );
};
export default AppBar;
