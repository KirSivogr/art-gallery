import React from 'react';
import logo from 'src/assets/logo.png';

import { Logo, LogoImage, LogoName } from './styled';

type LogotypeProps = {
   color: string;
   onClick: () => void;
};

export const Logotype: React.FC<LogotypeProps> = ({ color, onClick }) => {
   return (
      <Logo onClick={onClick}>
         <LogoImage alt='logo' src={logo} />
         <LogoName color={color}>
            Museum of <span>Art</span>
         </LogoName>
      </Logo>
   );
};
