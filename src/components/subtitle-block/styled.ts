import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const SubTitleBlock = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 40px;
   @media (max-width: 390px) {
      margin-top: 20px;
      margin-bottom: 40px;
      padding-top: 20px;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      padding-top: 20px;
   }
   @media (min-width: 769px) and (max-width: 1280px) {
      padding-top: 40px;
   }
`;
export const InfoSubtitle = styled.div`
   font-size: 32px;
   font-weight: 400;
   line-height: 40px;
   text-align: left;
   @media (max-width: 390px) {
      font-size: 3rem;
   }
`;
export const InfoTitle = styled.div`
   font-size: 16px;
   font-weight: 400;
   line-height: 20px;
   text-align: left;
   color: ${colors.green};
   @media (max-width: 390px) {
      font-size: 3rem;
   }
`;
