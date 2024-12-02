import { useEffect, useState } from 'react';
import { ConfirmModal } from '@components/confirm-modal';
import favIcon from 'src/assets/favIcon.svg';
import favIconFilled from 'src/assets/favIconFilled.svg';

import { useFavorite } from '@/hooks/useFavorite';
import { truncateString } from '@/utils/truncateString';

import {
   ArtistName,
   CardInformation,
   Description,
   FavoriteIcon,
   Icon,
   Status,
   Title,
} from './styled';

type CardInfoProps = {
   imageUrl: string;
   title: string;
   artist_title: string;
   id: number;
};

export const CardInfo = ({ imageUrl, title, artist_title, id }: CardInfoProps) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const { handleClickFavorite, isFav } = useFavorite(id);

   useEffect(() => {
      if (isModalOpen) {
         document.body.classList.add('no-scroll');
      } else {
         document.body.classList.remove('no-scroll');
      }

      return () => {
         document.body.classList.remove('no-scroll');
      };
   }, [isModalOpen]);

   return (
      <>
         <CardInformation>
            <Description>
               <Title>{truncateString(title)}</Title>
               <ArtistName>{truncateString(artist_title)}</ArtistName>
               <Status>Public</Status>
            </Description>
            <Icon onClick={() => setIsModalOpen(true)} isFav={isFav}>
               <FavoriteIcon src={isFav ? favIconFilled : favIcon} />
            </Icon>
         </CardInformation>
         <ConfirmModal
            isOpen={isModalOpen}
            isFav={isFav}
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => {
               handleClickFavorite(id, artist_title, imageUrl, title);
               setIsModalOpen(false);
            }}
         />
      </>
   );
};
