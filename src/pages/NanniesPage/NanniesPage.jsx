import { useEffect, useState } from 'react';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import { fetchNannies } from '../../services/nanniesService.js';

const NanniesPage = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    fetchNannies().then(setNannies);
  }, []);

  return (
    <div className='container'>
      <NanniesList nannies={nannies} />
    </div>
  );
};
export default NanniesPage;
