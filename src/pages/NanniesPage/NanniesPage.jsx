import { useState, useEffect } from 'react';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import usePagination from '../../hooks/usePagination.js';
import s from './NanniesPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import sprite from '../../assets/sprite.svg';

const NanniesPage = () => {
  const [filter, setFilter] = useState('Show all');
  const { nannies, loading, hasMore, showMore } = usePagination(filter);

  useEffect(() => {
    if (nannies.length > 3) {
      const secondLastItemId = `${nannies[nannies.length - 3].id}`;
      const secondLastItem = document.getElementById(secondLastItemId);

      if (secondLastItem) {
        secondLastItem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [nannies]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleShowMore = () => {
    showMore();
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
        <svg className={s.selectIcon} width='20' height='20'>
          <use href={`${sprite}#icon-chevron-down`}></use>
        </svg>
      </label>
      <div className={s.listWrap}>
        <NanniesList nannies={nannies} />
        {loading && <Loader />}
      </div>
      {hasMore && !loading && (
        <div className={s.btnWrap}>
          <button
            className={s.paginationBtn}
            onClick={handleShowMore}
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
