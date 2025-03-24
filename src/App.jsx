import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NanniesPage from './pages/NanniesPage/NanniesPage.jsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import { Toaster } from 'react-hot-toast';
import { FavoritesProvider } from './context/FavoritesProvider.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './context/AuthContext.jsx';

function App() {
  return (
    <>
      <AuthProvider>
        <FavoritesProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/nannies' element={<NanniesPage />} />
              <Route
                path='/favorites'
                element={
                  <PrivateRoute component={<FavoritesPage />} redirectTo='/' />
                }
              />
            </Routes>
            <Toaster />
          </Layout>
        </FavoritesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
