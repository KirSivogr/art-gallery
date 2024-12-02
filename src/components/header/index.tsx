import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logotype } from '@components/logotype';
import favIcon from 'src/assets/favIcon.svg';
import homeIcon from 'src/assets/homeIcon.svg';

import {
   Container,
   Favorites,
   FavoritesIcon,
   FavoritesText,
   Home,
   HomeIcon,
   HomeText,
   Links,
   Overlay,
   Wrapper,
} from './styled';

type HeaderProps = {
   isMainPage: boolean;
};

export const Header = ({ isMainPage }: HeaderProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const navigate = useNavigate();

   return (
      <Wrapper>
         <Container>
            <Overlay open={isOpen} onClick={() => setIsOpen(false)} />
            <Logotype color='white' onClick={() => navigate('/', { replace: false })} />
            {isMainPage ? (
               <Favorites onClick={() => navigate('/favorites', { replace: false })}>
                  <FavoritesIcon alt='iconFavorites' src={favIcon} />
                  <FavoritesText>Your favorites</FavoritesText>
               </Favorites>
            ) : (
               <Links>
                  <Home onClick={() => navigate('/', { replace: false })}>
                     <HomeIcon alt='iconHome' src={homeIcon} />
                     <HomeText>Home</HomeText>
                  </Home>
                  <Favorites onClick={() => navigate('/favorites', { replace: false })}>
                     <FavoritesIcon alt='iconFavorites' src={favIcon} />
                     <FavoritesText>Your favorites</FavoritesText>
                  </Favorites>
               </Links>
            )}
         </Container>
      </Wrapper>
   );
};
