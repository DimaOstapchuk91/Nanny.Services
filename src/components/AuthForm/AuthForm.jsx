import { useState } from 'react';
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../../services/authService.js';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      alert('Користувача зареєстровано!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      alert('Успішний вхід!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    alert('Вийшли з акаунту!');
  };

  return (
    <div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Пароль'
      />
      <button onClick={handleRegister}>Реєстрація</button>
      <button onClick={handleLogin}>Вхід</button>
      <button onClick={handleLogout}>Вихід</button>
    </div>
  );
};

export default AuthForm;
