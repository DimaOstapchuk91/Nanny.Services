import { useEffect, useState } from 'react';
import { fetchNannies } from '../../services/nanniesService.js';
import NanniesItem from '../NanniesItem/NanniesItem.jsx';
import s from './NanniesLost.module.css';

const NanniesList = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    fetchNannies().then(setNannies);
  }, []);

  return (
    <ul className={s.nanniesList}>
      {nannies?.map(nanny => (
        <NanniesItem key={nanny.id} nannies={nanny} />
      ))}
    </ul>
  );
};

export default NanniesList;
