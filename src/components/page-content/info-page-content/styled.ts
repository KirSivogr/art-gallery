import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   max-width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Wrapper = styled.main`
   display: flex;
   width: 100%;
   margin: 0 auto;
   min-height: 614px;
   background-color: ${colors.grey};
`;

export const Image = styled.div<{ background_url: string | undefined }>`
   width: 500px;
   height: 570px;
   margin-right: 80px;
   background-image: url(${({ background_url }) => background_url});
   max-width: 100%;
   background-position: center center;
   background-size: cover;
   box-shadow: 0 4px 8px ${colors.boxShadow};
   border-radius: 8px;
   @media (max-width: 391px) {
      width: 200px;
      height: 270px;
      margin-right: 0;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      width: 250px;
      height: 370px;
      margin-right: 0;
      font-size: 14px;
   }
   @media (min-width: 768px) and (max-width: 1280px) {
      margin-right: 40px;
   }
`;

export const ContentWrapper = styled.div`
   margin-top: 120px;
   margin-bottom: 120px;
   display: flex;
   @media (max-width: 391px) {
      margin-top: 30px;
      margin-bottom: 30px;
      flex-direction: column;
      display: flex;
      align-items: center;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      margin-top: 60px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   @media (min-width: 769px) and (max-width: 1280px) {
      margin-top: 60px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const Title = styled.div`
   font-size: 32px;
   margin-bottom: 32px;
   color: #393939;
`;
export const ArtistName = styled.div`
   font-size: 24px;
   line-height: 30px;
   margin-bottom: 16px;
   color: ${colors.green};
`;
export const YearsOfCreating = styled.div`
   font-size: 16px;
   line-height: 30px;
   font-weight: bold;
`;

export const MainDescriptionInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 120px;
   @media (max-width: 391px) {
      margin-bottom: 20px;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      margin-bottom: 30px;
   }
   @media (min-width: 768px) and (max-width: 1280px) {
      margin-bottom: 40px;
   }
`;
export const DescriptionWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;

export const OverviewItem = styled.div`
   font-size: 16px;
   color: ${colors.green};
   font-weight: 400;

   span {
      color: ${colors.black};
   }
`;
export const Overview = styled.div`
   font-size: 32px;
   line-height: 40px;
`;
