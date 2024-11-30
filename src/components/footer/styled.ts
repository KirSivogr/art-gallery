import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 63px;
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   height: 127px;
   width: 100%;
   background: ${colors.white};
`;

export const Modsen = styled.img`
   width: 164px;
   height: 60px;
`;
