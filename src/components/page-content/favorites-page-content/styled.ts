import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   max-width: 70%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Wrapper = styled.div`
   display: flex;
   width: 100%;
   background-color: ${colors.grey};
`;

export const TitleBlock = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-top: 120px;
   margin-bottom: 78px;
`;

export const Title = styled.div`
   font-size: 64px;
   font-weight: 700;
   line-height: 80px;
   text-align: center;
`;

export const SubTitle = styled.div`
   position: relative;
   font-size: 64px;
   font-weight: 700;
   line-height: 80px;
   text-align: center;
   color: ${colors.green};
`;

export const FavoritesContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
   gap: 10px;
   margin-bottom: 60px;
`;
