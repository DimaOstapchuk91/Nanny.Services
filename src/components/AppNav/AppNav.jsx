import { NavLink } from 'react-router-dom';
import s from './AppNav.module.css';
import { useAuth } from '../../hooks/useAuth.js';

const AppNav = () => {
  const { user } = useAuth();

  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to='/nannies'
          >
            Nannies
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.active}` : s.navLink
              }
              to='/favorites'
            >
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default AppNav;
