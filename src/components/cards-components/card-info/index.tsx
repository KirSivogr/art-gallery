import favIcon from 'src/assets/favIcon.svg';

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

export interface CardInfoProps {
   imageUrl: string;
   title: string;
   artist_title: string;
   id: number;
}

export const CardInfo = ({ imageUrl, title, artist_title, id }: CardInfoProps) => {
   return (
      <CardInformation>
         <Description>
            <Title>{truncateString(title)}</Title>
            <ArtistName>{artist_title}</ArtistName>
            <Status>Public</Status>
         </Description>
         <Icon isFav={false}>
            <FavoriteIcon src={favIcon} />
         </Icon>
      </CardInformation>
   );
};
