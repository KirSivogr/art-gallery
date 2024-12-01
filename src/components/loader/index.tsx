import React from 'react';

import { Load, LoaderContainer, Spinner } from './styled';

export const Loader = () => {
   return (
      <LoaderContainer>
         <Spinner />
         <Load />
      </LoaderContainer>
   );
};
