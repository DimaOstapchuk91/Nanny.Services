import { useEffect, useState } from 'react';
import { fetchNannies } from '../../services/nanniesService.js';

const NanniesList = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    fetchNannies().then(setNannies);
  }, []);

  console.log(nannies[0]?.id);
  return (
    <ul>
      {nannies?.map(nanny => (
        <li key={nanny.id}>{nanny.name}</li>
      ))}
    </ul>
  );
};

export default NanniesList;
