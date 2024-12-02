import { useEffect, useState } from 'react';

import { getRecommendedArts } from '@/api/api';
import { ArtByIdWithImage } from '@/types/interfaces';

type UseFetchArtListProps = {
   recommendedArtList: ArtByIdWithImage[];
   isRecArtListLoading: boolean;
   isRecommendedListError: boolean;
};

export function useGetRecommendedArtList(): UseFetchArtListProps {
   const [recommendedArtList, setRecommendedArtData] = useState<ArtByIdWithImage[]>([]);
   const [isRecArtListLoading, setIsRecArtListLoading] = useState(false);
   const [isRecommendedListError, setIsRecommendedListError] = useState(false);

   useEffect(() => {
      const fetchRecommendedArtData = async () => {
         setIsRecArtListLoading(true);
         try {
            const res = await getRecommendedArts();
            const recommendedArtsWithImages = res.map(
               data =>
                  ({
                     ...data,
                     imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`,
                  } as ArtByIdWithImage),
            );

            setRecommendedArtData(recommendedArtsWithImages);
         } catch (err) {
            setIsRecommendedListError(true);
         } finally {
            setIsRecArtListLoading(false);
         }
      };

      fetchRecommendedArtData();
   }, []);

   return { recommendedArtList, isRecArtListLoading, isRecommendedListError };
}
