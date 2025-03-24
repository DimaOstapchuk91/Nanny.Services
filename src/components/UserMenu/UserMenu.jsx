import { errToast, successfullyToast } from '../../utils/toast.js';
import s from './UserMenu.module.css';
import sprite from '../../assets/sprite.svg';
import { useAuth } from '../../hooks/useAuth.js';
import { useLocation } from 'react-router-dom';
import { logoutUser } from '../../services/authService.js';

const UserMenu = () => {
  const { user } = useAuth();
  const location = useLocation();
  const homeLocation = location.pathname === '/';

  const handleLogout = async () => {
    try {
      await logoutUser();
      successfullyToast('Goodbay');
    } catch (error) {
      errToast(`Oops, ${error}`);
    }
  };

  return (
    <div className={s.userInfo}>
      {!homeLocation && (
        <>
          <span className={s.iconBox}>
            <svg className={s.userIcon} width='24' height='24'>
              <use href={`${sprite}#icon-user`}></use>
            </svg>
          </span>
          <p className={s.userName}>
            {user?.displayName ? user.displayName : 'Anonimus'}
          </p>
        </>
      )}
      <button type='button' className={s.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
