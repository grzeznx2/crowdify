import React from 'react'

import CommentForm from '../../Form/Forms/CommentForm'
import Modal from '../Modal'

export default function CommentModal({ isModalOpen, closeModal, outerContainerModifiers, ...restProps }) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      title="Leave a comment"
      outerContainerModifiers={outerContainerModifiers}
      contentModifiers="center"
    >
      <CommentForm closeModal={closeModal} {...restProps} />
    </Modal>
  )
}
