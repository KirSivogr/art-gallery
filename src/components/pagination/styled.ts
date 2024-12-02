import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const PaginationWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 30px;
`;

export const PageButton = styled.button<{ active: boolean }>`
   font-family: Lexend Deca, serif;
   padding: 8px 12px;
   margin: 0 5px;
   border: none;
   border-radius: 5px;
   background-color: ${({ active }) => (active ? `${colors.green}` : `${colors.white}`)};
   color: ${({ active }) => (active ? `${colors.white}` : `${colors.black}`)};
   cursor: pointer;
   outline: none;
`;

export const ArrowButton = styled.button`
   padding: 8px 12px;
   margin: 0 5px;
   border-radius: 5px;
   color: ${colors.black};
   cursor: pointer;
   outline: none;
   border: none;
   background-color: ${colors.white};
`;
