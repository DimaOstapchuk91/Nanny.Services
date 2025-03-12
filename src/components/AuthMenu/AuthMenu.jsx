import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm.jsx';
import Modal from '../Modal/Modal.jsx';
import RegistrationForm from '../RegisterForm/RegisterForm.jsx';

const AuthMenu = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClickLogin = () => {
    setIsLoginOpen(true);
  };

  const handleClickLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleClickSignUp = () => {
    setIsSignUp(true);
  };

  const handleClickSignUpClose = () => {
    setIsSignUp(false);
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
          <button type='button' onClick={handleClickSignUp}>
            Registration
          </button>
        </li>
      </ul>
      <Modal isOpen={isLoginOpen} onClose={handleClickLoginClose}>
        <LoginForm onClose={handleClickLoginClose} />
      </Modal>
      <Modal isOpen={isSignUp} onClose={handleClickSignUpClose}>
        <RegistrationForm onClose={handleClickSignUpClose} />
      </Modal>
    </>
  );
};
export default AuthMenu;
