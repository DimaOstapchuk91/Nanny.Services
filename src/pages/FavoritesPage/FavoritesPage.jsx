import { useContext, useEffect, useState } from 'react';
import { fetchNannies } from '../../services/nanniesService.js';
import { FavoritesContext } from '../../components/FavoritesProvider/FavoritesProvider.jsx';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';

const FavoritesPage = () => {
  const [nannies, setNannies] = useState([]);

  const { favoriteIds } = useContext(FavoritesContext);

  useEffect(() => {
    fetchNannies().then(setNannies);
  }, []);

  console.log(nannies.map(item => item.name_index));

  // Фільтруємо тільки обрані няні
  const favoriteNannies = nannies?.filter(nanny =>
    favoriteIds.includes(nanny.id)
  );

  console.log(favoriteNannies);
  return (
    <div className='container'>
      <NanniesList nannies={favoriteNannies} />
    </div>
  );
};
export default FavoritesPage;
