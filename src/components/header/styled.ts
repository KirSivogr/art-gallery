import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 63px;
   @media (max-width: 490px) {
      width: 85%;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   height: 127px;
   width: 100%;
   background: ${colors.gradient};
`;

export const FavoritesIcon = styled.img`
   position: relative;
   top: 5px;
   width: 30px;
   height: 38px;
   padding-bottom: 3px;
   transition: 1s;
   &:hover {
      transform: scale(1.1);
   }
`;

export const FavoritesText = styled.div`
   display: flex;
   align-self: end;
   height: 20px;
   padding-bottom: 6px;
   color: ${colors.white};
`;

export const Favorites = styled.div`
   display: flex;
   align-self: end;
   color: ${colors.white};
   cursor: pointer;
`;

export const Home = styled.div`
   align-self: end;
   display: flex;
   color: ${colors.white};
   cursor: pointer;
`;

export const Links = styled.div`
   display: flex;
   align-self: end;
   justify-content: space-between;
`;

export const HomeText = styled.div`
   display: flex;
   align-self: end;
   height: 20px;
   width: 60px;
   padding: 6px;
   color: ${colors.white};
   @media (max-width: 390px) {
      font-size: 0.2rem;
   }
`;

export const HomeIcon = styled.img`
   width: 20px;
   height: 28px;
   transition: 1s;
   &:hover {
      transform: scale(1.1);
   }
`;

export const Overlay = styled.div<{ open: boolean }>`
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100%;
   background-color: ${''};
   z-index: 5;
   display: ${({ open }) => (open ? 'block' : 'none')};
`;
