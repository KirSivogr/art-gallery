import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
`;

export const ModalContainer = styled.div`
   background: white;
   padding: 20px;
   border-radius: 8px;
   box-shadow: 0 4px 8px ${colors.boxShadow};
   width: 400px;
   text-align: center;
`;

export const Title = styled.h2`
   font-family: 'Lexend Deca', sans-serif;
   margin: 0 0 20px;
`;

export const SubTitle = styled.div`
   font-family: 'Lexend Deca', serif;
   font-size: 16px;
   margin: 0 0 20px;
`;

export const Button = styled.button`
   background: ${colors.green};
   color: ${colors.white};
   font-family: 'Lexend Deca', sans-serif;
   border: none;
   padding: 10px 15px;
   border-radius: 5px;
   cursor: pointer;
   margin: 5px;
   transition: 1s;

   &:hover {
      background: ${colors.darkGreen};
   }
`;
