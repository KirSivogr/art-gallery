import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { getArtLists } from '@/api/api';
import { ArtByIdWithImage } from '@/types/interfaces';

type UseFetchArtListProps = {
   artList: ArtByIdWithImage[];
   totalPages: number;
   isArtListLoading: boolean;
   isArtListError: boolean;
   setArtList: Dispatch<SetStateAction<ArtByIdWithImage[]>>;
};

export function useGetArtList(
   query: string | undefined,
   pageNumber: number,
): UseFetchArtListProps {
   const [artList, setArtList] = useState<ArtByIdWithImage[]>([]);
   const [isArtListLoading, setIsArtListLoading] = useState(false);
   const [isArtListError, setIsArtListError] = useState(false);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchArtList = async () => {
         setIsArtListLoading(true);
         try {
            const [res, pagination] = await getArtLists(query, pageNumber);

            const artsWithImages = res.map(
               (data: ArtByIdWithImage) =>
                  ({
                     ...data,
                     imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`,
                  } as ArtByIdWithImage),
            );

            setArtList(artsWithImages);
            setTotalPages(pagination.total_pages);
         } catch (error) {
            setIsArtListError(true);
         } finally {
            setIsArtListLoading(false);
         }
      };

      fetchArtList();
   }, [query, pageNumber]);

   return { artList, isArtListLoading, isArtListError, totalPages, setArtList };
}
