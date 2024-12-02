import React from 'react';

import { Button, ModalContainer, Overlay, SubTitle, Title } from './styled';

type ConfirmModalProps = {
   isOpen: boolean;
   isFav: boolean;
   onClose: () => void;
   onConfirm: () => void;
};

export const ConfirmModal = ({
   isOpen,
   isFav,
   onClose,
   onConfirm,
}: ConfirmModalProps) => {
   if (!isOpen) return null;

   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   return (
      <Overlay onClick={handleOverlayClick}>
         <ModalContainer>
            {isFav ? (
               <>
                  <Title>Delete from favorites</Title>
                  <SubTitle>
                     Are you sure you want to delete from favorite this image?
                  </SubTitle>
               </>
            ) : (
               <>
                  <Title>Add to favorites</Title>
                  <SubTitle>Are you sure you want to favorite this image?</SubTitle>
               </>
            )}
            <Button onClick={onConfirm}>Yes</Button>
            <Button onClick={onClose}>No</Button>
         </ModalContainer>
      </Overlay>
   );
};
