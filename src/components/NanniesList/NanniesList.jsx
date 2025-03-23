import NanniesItem from '../NanniesItem/NanniesItem.jsx';
import s from './NanniesLost.module.css';
import usePagination from '../../hooks/usePagination.js';
import { useState } from 'react';

const NanniesList = () => {
  const [filter, setFilter] = useState('Show all');
  const { nannies, loading } = usePagination(filter);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange} value={filter}>
        <option value='Show all'>Show all</option>
        <option value='A to Z'>A to Z</option>
        <option value='Z to A'>Z to A</option>
        <option value='Price: Low to High'>Price: Low to High</option>
        <option value='Price: High to Low'>Price: High to Low</option>
        <option value='Rating: Low to High'>Rating: Low to High</option>
        <option value='Rating: High to Low'>Rating: High to Low</option>
      </select>
      {!loading && (
        <ul className={s.nanniesList}>
          {nannies?.map(nanny => (
            <NanniesItem key={nanny.id} nannies={nanny} />
          ))}
        </ul>
      )}
      {/* {hasMore && (
        <button onClick={fetchData} type='button'>
          Show more
        </button>
      )} */}
    </div>
  );
};

export default NanniesList;
