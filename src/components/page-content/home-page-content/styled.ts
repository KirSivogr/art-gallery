import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   margin: 0 auto;
`;

export const Wrapper = styled.div`
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
   font-weight: bold;
   line-height: 80px;
   text-align: center;
   span {
      font-weight: bold;
      color: ${colors.green};
   }
`;
