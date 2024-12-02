import React from 'react';
import { CardInfo } from '@components/cards-components/card-info';
import { Loader } from '@components/loader';

import { Card, CardImage } from './styled';

type ArtCardProps = {
   imageUrl: string;
   title: string;
   artist_title: string;
   isLoading: boolean;
   id: number;
   onClick: () => void;
};

export const ArtCard = ({
   imageUrl,
   title,
   artist_title,
   isLoading,
   onClick,
   id,
}: ArtCardProps) => {
   return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
         {isLoading ? (
            <Loader />
         ) : (
            <Card>
               <CardImage onClick={onClick} background_url={imageUrl} />
               <CardInfo
                  id={id}
                  artist_title={artist_title}
                  imageUrl={imageUrl}
                  title={title}
               />
            </Card>
         )}
      </>
   );
};
