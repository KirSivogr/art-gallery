import React from 'react';

import { InfoSubtitle, InfoTitle, SubTitleBlock } from './styled';

type SubtitleBlockProps = {
   infoTitle: string;
   infoSubtitle: string;
};

export const SubtitleBlock: React.FC<SubtitleBlockProps> = ({
   infoTitle,
   infoSubtitle,
}) => {
   return (
      <SubTitleBlock>
         <InfoTitle>{infoTitle}</InfoTitle>
         <InfoSubtitle>{infoSubtitle}</InfoSubtitle>
      </SubTitleBlock>
   );
};
