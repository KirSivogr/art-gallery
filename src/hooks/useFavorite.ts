import { useEffect, useState } from 'react';

import { ArtByIdWithImage } from '@/types/interfaces';

export const useFavorite = (id: number | undefined) => {
   const [favoritesItems, setFavoritesItems] = useState<ArtByIdWithImage[]>([]);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);
         const isFavInFavorites = favorites.some(
            (favorite: ArtByIdWithImage) => favorite.id === id,
         );

         setFavoritesItems(favorites);
         setIsFav(isFavInFavorites);
      } else {
         localStorage.setItem('favorites', JSON.stringify([]));
      }
   }, [id]);

   const handleClickFavorite = (
      id: number,
      artist_title: string,
      imageUrl: string,
      title: string,
   ) => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);
         const indexOfFav = favorites.findIndex(
            (favorite: ArtByIdWithImage) => favorite.id === id,
         );

         if (indexOfFav === -1) {
            const newFavorite = {
               id,
               title,
               artist_title,
               imageUrl,
            } as ArtByIdWithImage;

            favorites.push(newFavorite);
            setIsFav(true);
         } else {
            favorites.splice(indexOfFav, 1);
            setIsFav(false);
         }

         localStorage.setItem('favorites', JSON.stringify(favorites));
         setFavoritesItems(favorites);
      }
   };

   return { handleClickFavorite, isFav, favoritesItems };
};
