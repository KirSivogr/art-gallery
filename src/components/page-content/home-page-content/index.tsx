import React from 'react';

import { Container, Title, TitleBlock, Wrapper } from './styled';

export const HomePageContent = () => {
   return (
      <Wrapper>
         <Container>
            <TitleBlock>
               <Title>
                  Let&apos;s Find Some <span>Art</span>
               </Title>
               <Title>Here!</Title>
            </TitleBlock>
         </Container>
      </Wrapper>
   );
};
