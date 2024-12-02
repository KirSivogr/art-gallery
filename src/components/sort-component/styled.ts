import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const StyledSelect = styled.select`
   position: relative;
   appearance: none;
   outline: ${colors.green};
   border: 0;
   font-size: 0.8rem;
   font-family: 'Lexend Deca', sans-serif;
   height: 2rem;
   margin: 5px;
   border-radius: 0.25rem;
   box-shadow: none;
   flex: 1;
   padding: 0 0.5em;
   color: ${colors.black};
   opacity: 0.7;
   background-color: ${colors.white};
   background-image: none;
   cursor: pointer;
   left: 2rem;
   bottom: 0.3rem;
   z-index: 2;

   &::-ms-expand {
      display: none;
   }

   &:hover::after {
      color: ${colors.green};
   }
`;
export const SelectWrapper = styled.div`
   position: relative;
   display: inline-flex;
   justify-content: flex-end;
   width: 15em;
   height: 2em;
   border-radius: 0.25em;
   overflow: hidden;
`;

export const SelectContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 1.5rem;

   &:hover {
      cursor: pointer;
   }
`;

export const ArrowDown = styled.div`
   border-left: 7px solid transparent;
   border-right: 7px solid transparent;
   border-top: 7px solid ${colors.primary};
   cursor: pointer;
   position: absolute;
   margin-top: 10px;
   margin-right: 5px;
`;
