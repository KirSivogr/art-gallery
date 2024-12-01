import styled from 'styled-components';
import { Field, Form } from 'formik';

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

export const StyledForm = styled(Form)`
   display: flex;
   position: relative;
   justify-content: center;
   padding: 16px;
   @media (max-width: 390px) {
      margin-bottom: 10px;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      margin-bottom: 10px;
   }
   @media (min-width: 769px) {
      margin-bottom: 10px;
   }
`;

export const Input = styled(Field)`
   display: flex;
   padding: 10px;
   height: 50px;
   border: none;
   border-radius: 20px;
   margin-bottom: 10px;
   background: ${colors.white};
   font-family: 'Lexend Deca', sans-serif;
   @media (max-width: 390px) {
      width: 200px;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      width: 342px;
   }
   @media (min-width: 769px) {
      width: 542px;
   }
`;

export const SearchButton = styled.button<{
   backgroundImageDefault: string;
   backgroundImageGreen: string;
}>`
   position: absolute;
   width: 32px;
   height: 32px;
   background-image: url(${({ backgroundImageDefault }) => backgroundImageDefault});
   background-size: cover;
   background-color: ${colors.white};
   border: none;
   right: 35px;
   top: 35px;
   cursor: pointer;
   transition: background 0.3s ease;
   &:hover {
      background-image: url(${({ backgroundImageGreen }) => backgroundImageGreen});
   }
`;

export const Gallery = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   flex-wrap: wrap;
   margin-bottom: 120px;
   @media (min-width: 769px) and (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 80px;
   }
   @media (max-width: 769px) {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 80px;
      gap: 10px;
   }
`;
