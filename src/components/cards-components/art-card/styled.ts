import styled from 'styled-components';

export const Card = styled.div`
   display: flex;
   max-width: 400px;
   height: 450px;
   flex-direction: column;
   justify-content: center;
   position: relative;
`;

export const CardImage = styled.div<{ background_url: string }>`
   background-image: url(${({ background_url }) => background_url});
   width: 100%;
   height: 100%;
   background-position: center center;
   background-size: cover;
   cursor: pointer;
`;
