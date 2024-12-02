import { ArtByIdWithImage, SortType } from '@/types/interfaces';

export const sortCards = (
   artList: ArtByIdWithImage[],
   type: SortType,
): ArtByIdWithImage[] => {
   if (type === 'A-Z') {
      return [...artList].sort((a, b) => a.title.localeCompare(b.title));
   }
   if (type === 'Z-A') {
      return [...artList].sort((a, b) => b.title.localeCompare(a.title));
   }

   return artList;
};
