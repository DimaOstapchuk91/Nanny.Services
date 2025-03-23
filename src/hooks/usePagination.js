import { useState, useEffect } from 'react';
import { getDatabase, ref, get, query, orderByChild } from 'firebase/database';

const usePagination = filter => {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getDatabase();
    let q = query(ref(db, 'nannies'));

    // Сортування
    switch (filter) {
      case 'A to Z':
        q = query(ref(db, 'nannies'), orderByChild('name'));
        break;
      case 'Z to A':
        q = query(ref(db, 'nannies'), orderByChild('name'));
        break;
      case 'Price: Low to High':
        q = query(ref(db, 'nannies'), orderByChild('price_per_hour'));
        break;
      case 'Price: High to Low':
        q = query(ref(db, 'nannies'), orderByChild('price_per_hour'));
        break;
      case 'Rating: Low to High':
        q = query(ref(db, 'nannies'), orderByChild('rating'));
        break;
      case 'Rating: High to Low':
        q = query(ref(db, 'nannies'), orderByChild('rating'));
        break;
      default:
        // За замовчуванням, можна сортувати за іменем або іншим полем
        q = query(ref(db, 'nannies'));
        break;
    }

    // Отримуємо дані з Firebase
    get(q)
      .then(snapshot => {
        const data = snapshot.val() || {};
        const loadedNannies = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));

        // Додаткове сортування на клієнті
        if (filter === 'A to Z') {
          loadedNannies.sort((a, b) => a.name.localeCompare(b.name));
        } else if (filter === 'Z to A') {
          loadedNannies.sort((a, b) => b.name.localeCompare(a.name));
        } else if (filter === 'Price: Low to High') {
          loadedNannies.sort((a, b) => a.price_per_hour - b.price_per_hour);
        } else if (filter === 'Price: High to Low') {
          loadedNannies.sort((a, b) => b.price_per_hour - a.price_per_hour);
        } else if (filter === 'Rating: Low to High') {
          loadedNannies.sort((a, b) => a.rating - b.rating);
        } else if (filter === 'Rating: High to Low') {
          loadedNannies.sort((a, b) => b.rating - a.rating);
        }

        setNannies(loadedNannies);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });

    return () => {};
  }, [filter]);

  return { nannies, loading };
};

export default usePagination;
