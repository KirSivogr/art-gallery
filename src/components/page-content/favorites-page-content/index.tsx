import { CardInfoWithImg } from '@components/cards-components/card-info-with-image';
import { SubtitleBlock } from '@components/subtitle-block';

import {
   Container,
   FavoritesContainer,
   SubTitle,
   Title,
   TitleBlock,
   Wrapper,
} from './styled';

export const FavoritesPageContent = () => {
   return (
      <Wrapper>
         <Container>
            <TitleBlock>
               <Title>Here Are Your</Title>
               <SubTitle> Favorites</SubTitle>
            </TitleBlock>
            <SubtitleBlock infoSubtitle='Your favorites list' infoTitle='Saved by you' />
            <FavoritesContainer>
               <CardInfoWithImg isFavoritePage recArtLists={[]} isLoading={false} />
            </FavoritesContainer>
         </Container>
      </Wrapper>
   );
};
