import { logoutUser } from '../../services/authService.js';
import { errToast, successfullyToast } from '../../utils/toast.js';

const UserMenu = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      successfullyToast('Goodbay');
    } catch (error) {
      errToast(`Oops, ${error}`);
    }
  };

  return (
    <div>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
