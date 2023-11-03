import React from 'react';
import {AddButton} from '../../components';
import {Modal, useModalRef} from '../../components/Modal/Modal';
import {AddEntryDesign} from './AddEntryDesign';

interface Props {}

export const AddEntry: React.FC<Props> = () => {
  const modalRef = useModalRef();
  const onOpenModal = () => {
    modalRef?.current?.setVisibility?.(true);
  };

  const closeModal = () => {
    modalRef?.current?.setVisibility?.(false);
  };

  return (
    <>
      <AddButton onPress={onOpenModal} />
      <Modal ref={modalRef}>
        <AddEntryDesign closeModal={closeModal} />
      </Modal>
    </>
  );
};
