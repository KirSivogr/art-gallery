import React from 'react';
import { Logotype } from '@components/logotype';

import { Container, Wrapper } from './styled';

export const Footer = () => {
   return (
      <Wrapper>
         <Container>
            <Logotype color='black' onClick={() => null} />
         </Container>
      </Wrapper>
   );
};
