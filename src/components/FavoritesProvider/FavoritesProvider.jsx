import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Завантаження фаворитів з localStorage при старті
  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem('favoriteNannies')) || [];
    setFavoriteIds(storedFavorites);
  }, []);

  // Додавання або видалення няні з фаворитів
  const toggleFavorite = id => {
    setFavoriteIds(prevFavorites => {
      let updatedFavorites;
      if (prevFavorites.includes(id)) {
        updatedFavorites = prevFavorites.filter(favId => favId !== id);
      } else {
        updatedFavorites = [...prevFavorites, id];
      }

      localStorage.setItem('favoriteNannies', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
