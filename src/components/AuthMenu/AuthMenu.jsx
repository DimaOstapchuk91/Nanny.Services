import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm.jsx';
import Modal from '../Modal/Modal.jsx';

const AuthMenu = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleClickLogin = () => {
    setIsLoginOpen(true);
  };

  const handleClickLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <ul>
        <li>
          <button type='button' onClick={handleClickLogin}>
            Log In
          </button>
        </li>
        <li>
          <button type='button'>Registration</button>
        </li>
      </ul>
      <Modal isOpen={isLoginOpen} onClose={handleClickLoginClose}>
        <LoginForm />
      </Modal>
    </>
  );
};
export default AuthMenu;
