import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const CardInformation = styled.div`
   display: flex;
   height: 132px;
   justify-content: space-between;
   background-color: ${colors.white};
   width: 90%;
   margin-left: 5px;
   padding: 12px 24px;
   position: absolute;
   bottom: -70px;
   left: 10px;
   z-index: 1;
   box-sizing: border-box;
`;

export const FavoriteIcon = styled.img`
   cursor: pointer;
   display: inline-block;
   width: 20px;
   height: 20px;
   @media (max-width: 390px) {
      width: 10px;
      height: 10px;
   }
`;

export const Icon = styled.div<{ isFav: boolean }>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   background-color: ${({ isFav }) => (isFav ? `${colors.green}` : `${colors.white}`)};
   width: 40px;
   height: 40px;
   cursor: pointer;
   @media (max-width: 390px) {
      width: 15px;
      height: 15px;
   }
`;

export const Status = styled.div`
   font-size: 1rem;
   height: 1.62rem;
   color: ${colors.primary};
   font-weight: 700;
   margin-top: 15px;
`;

export const Title = styled.div`
   font-size: 1rem;
   color: ${colors.primary};
   font-weight: 500;
   margin-bottom: 10px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ArtistName = styled.div`
   font-size: 18px;
   color: ${colors.green};
   margin-bottom: 10px;
`;

export const Description = styled.div`
   display: flex;
   width: 80%;
   flex-direction: column;
   align-items: flex-start;
`;
