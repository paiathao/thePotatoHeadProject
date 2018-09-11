import React from 'react';

import Modal from '../Modal/Modal';

export default ({ note, visible, closeModal }) => {
  return (
    <Modal
      visible={visible}
    >
      <button onClick={closeModal}>close</button>
      <p>{note}</p>
    </Modal>
  )
}