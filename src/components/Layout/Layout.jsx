import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar.jsx';
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <main>
      {!isHome && <AppBar />}
      <Suspense fallback={null}>{children}</Suspense>
      <ThemeSwitcher />
    </main>
  );
};
export default Layout;
