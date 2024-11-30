import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Logo = styled.div`
   display: flex;
   justify-content: center;
   width: 206px;
   height: 63px;
   cursor: pointer;
`;

export const LogoName = styled.div`
   display: flex;
   align-self: end;
   padding: 5px;
   color: ${props => props.color};
   span {
      margin-left: 5px;
      font-weight: bold;
      color: ${colors.green};
   }
`;

export const LogoImage = styled.img`
   width: 50px;
   height: 50px;
   padding: 10px;
`;
