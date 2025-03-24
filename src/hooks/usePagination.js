import { useState, useEffect } from 'react';
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  limitToFirst,
  startAfter,
  onValue,
  limitToLast,
  endBefore,
} from 'firebase/database';

const usePagination = filter => {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastKey, setLastKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isDescending, setIsDescending] = useState(false);

  useEffect(() => {
    if (
      filter === 'Z to A' ||
      filter === 'Price: High to Low' ||
      filter === 'Rating: Low to High'
    ) {
      setIsDescending(true);
    } else {
      setIsDescending(false);
    }
  }, [filter]);

  const fetchData = (reset = false) => {
    setLoading(true);
    const db = getDatabase();
    const sortKey = getSortKey(filter);

    let q;
    if (reset) {
      // Для нового запиту
      if (isDescending) {
        q = query(ref(db, 'nannies'), orderByChild(sortKey), limitToLast(3));
      } else {
        q = query(ref(db, 'nannies'), orderByChild(sortKey), limitToFirst(3));
      }
    } else {
      if (isDescending) {
        q = query(
          ref(db, 'nannies'),
          orderByChild(sortKey),
          endBefore(lastKey),
          limitToLast(3)
        );
      } else {
        q = query(
          ref(db, 'nannies'),
          orderByChild(sortKey),
          startAfter(lastKey),
          limitToFirst(3)
        );
      }
    }

    onValue(q, snapshot => {
      if (!snapshot.exists()) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      const loadedNannies = [];
      let newLastKey = null;

      snapshot.forEach(childSnapshot => {
        loadedNannies.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });

        if (sortKey === 'name') {
          newLastKey = childSnapshot.val().name;
        } else if (sortKey === 'id') {
          newLastKey = childSnapshot.val().id;
        } else if (sortKey === 'price_per_hour') {
          newLastKey = childSnapshot.val().price_per_hour;
        } else if (sortKey === 'rating') {
          newLastKey = childSnapshot.val().rating;
        }
      });

      if (isDescending) {
        loadedNannies.reverse();
        newLastKey = loadedNannies[loadedNannies.length - 1][sortKey];
      }

      if (loadedNannies.length < 3) setHasMore(false);
      else setHasMore(true);

      setNannies(prev => (reset ? loadedNannies : [...prev, ...loadedNannies]));
      setLastKey(newLastKey);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(true);
  }, [filter, isDescending]);

  const showMore = () => {
    if (!loading && hasMore) fetchData();
  };

  return { nannies, loading, hasMore, showMore };
};

const getSortKey = filter => {
  switch (filter) {
    case 'Show all':
      return 'id';
    case 'A to Z':
    case 'Z to A':
      return 'name';
    case 'Price: Low to High':
    case 'Price: High to Low':
      return 'price_per_hour';
    case 'Rating: Low to High':
    case 'Rating: High to Low':
      return 'rating';
    default:
      return 'id';
  }
};

export default usePagination;
