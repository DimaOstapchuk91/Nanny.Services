import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NanniesPage from './pages/NanniesPage/NanniesPage.jsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nannies' element={<NanniesPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
        <Toaster />
      </Layout>
    </>
  );
}

export default App;
