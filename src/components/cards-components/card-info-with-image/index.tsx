import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmModal } from '@components/confirm-modal';
import { Loader } from '@components/loader';
import favIcon from 'src/assets/favIcon.svg';

import favIconFilled from '@/assets/favIconFilled.svg';
import { useFavorite } from '@/hooks/useFavorite';
import { ArtByIdWithImage } from '@/types/interfaces';
import { truncateString } from '@/utils/truncateString';

import {
   ArtistName,
   CardInformation,
   Description,
   EmptyList,
   FavoriteIcon,
   Icon,
   Image,
   Info,
   Public,
   Title,
} from './styled';

type CardInfoWithImgProps = {
   recArtLists: ArtByIdWithImage[];
   isFavoritePage: boolean;
   isLoading: boolean;
};

type Artwork = {
   id: number;
   artist_title: string;
   imageUrl: string;
   title: string;
};

export const CardInfoWithImg = ({
   recArtLists,
   isFavoritePage,
   isLoading,
}: CardInfoWithImgProps) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
   const { handleClickFavorite, favoritesItems } = useFavorite(undefined);
   const navigate = useNavigate();

   const resultsItems = isFavoritePage ? favoritesItems : recArtLists;

   const handleIconClick = (
      id: number,
      artist_title: string,
      imageUrl: string,
      title: string,
   ) => {
      setIsModalOpen(true);
      setSelectedArt({ id, artist_title, imageUrl, title });
   };

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

   return resultsItems.length ? (
      <>
         {resultsItems.map(({ id, artist_title, imageUrl, title }) => (
            <CardInformation key={id}>
               {isLoading ? (
                  <Loader />
               ) : (
                  <Image
                     background_url={imageUrl}
                     onClick={() => navigate(`/artinfo/${id}`, { replace: false })}
                  />
               )}
               <Info>
                  <Description>
                     <Title>{truncateString(title)}</Title>
                     <ArtistName>{artist_title}</ArtistName>
                     <Public>Public</Public>
                  </Description>
                  <Icon
                     onClick={() => handleIconClick(id, artist_title, imageUrl, title)}
                     isFav={favoritesItems.some(item => item.id === id)}
                  >
                     <FavoriteIcon
                        src={
                           favoritesItems.some(item => item.id === id)
                              ? favIconFilled
                              : favIcon
                        }
                     />
                  </Icon>
               </Info>
            </CardInformation>
         ))}
         <ConfirmModal
            isOpen={isModalOpen}
            isFav={favoritesItems.some(item => item.id === selectedArt?.id)}
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => {
               if (selectedArt) {
                  handleClickFavorite(
                     selectedArt.id,
                     selectedArt.artist_title,
                     selectedArt.imageUrl,
                     selectedArt.title,
                  );
               }
               setIsModalOpen(false);
            }}
         />
      </>
   ) : (
      <EmptyList>Your favorites list is empty</EmptyList>
   );
};
