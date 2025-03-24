import { useState, useEffect } from 'react';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'default'
  );

  useEffect(() => {
    document.body.classList.remove('red', 'green');
    if (theme !== 'default') {
      document.body.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={s.themeSwitcher}>
      <p>Thema</p>
      <button
        className={`${s.button} ${s.default}`}
        onClick={() => setTheme('default')}
      />
      <button
        className={`${s.button} ${s.red}`}
        onClick={() => setTheme('red')}
      />
      <button
        className={`${s.button} ${s.green}`}
        onClick={() => setTheme('green')}
      />
    </div>
  );
};

export default ThemeSwitcher;
