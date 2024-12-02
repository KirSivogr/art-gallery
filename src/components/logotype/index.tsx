import React from 'react';

import logoFooter from '@/assets/logoFooter.png';
import logoHeader from '@/assets/logoHeader.jpg';

import { Logo, LogoImage, LogoName } from './styled';

type LogotypeProps = {
   color: string;
   onClick: () => void;
};

export const Logotype = ({ color, onClick }: LogotypeProps) => {
   return (
      <Logo onClick={onClick}>
         <LogoImage alt='logo' src={color === 'white' ? logoHeader : logoFooter} />
         <LogoName color={color}>
            Museum of <span>Art</span>
         </LogoName>
      </Logo>
   );
};
