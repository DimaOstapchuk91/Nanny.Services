import { useState } from 'react';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import usePagination from '../../hooks/usePagination.js';
import s from './NanniesPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';

const NanniesPage = () => {
  const [filter, setFilter] = useState('A to Z');
  const { nannies, loading, hasMore, showMore } = usePagination(filter);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className='container'>
      <label className={s.label}>
        <p className={s.labelText}>Filters</p>
        <select
          className={s.selectInput}
          onChange={handleFilterChange}
          value={filter}
        >
          <option value='Show all'>Show all</option>
          <option value='A to Z'>A to Z</option>
          <option value='Z to A'>Z to A</option>
          <option value='Price: Low to High'>Price: Low to High</option>
          <option value='Price: High to Low'>Price: High to Low </option>
          <option value='Rating: High to Low'>Rating: Low to High</option>
          <option value='Rating: Low to High'>Rating: High to Low</option>
        </select>
      </label>
      <div className={s.listWrap}>
        {loading ? <Loader /> : <NanniesList nannies={nannies} />}
      </div>
      {hasMore && !loading && (
        <div className={s.btnWrap}>
          <button
            className={s.paginationBtn}
            onClick={showMore}
            disabled={loading}
            type='button'
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NanniesPage;
