import { database } from '../firebase';
import { ref, get } from 'firebase/database';

export const fetchNannies = async () => {
  const nanniesRef = ref(database, 'nannies');
  const snapshot = await get(nanniesRef);

  if (snapshot.exists()) {
    const nanniesObj = snapshot.val();
    return Object.values(nanniesObj);
  } else {
    return [];
  }
};
