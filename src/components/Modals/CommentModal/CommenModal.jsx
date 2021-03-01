import React from 'react'

import CommentForm from '../../Form/Forms/CommentForm'
import Modal from '../Modal'

export default function CommentModal({ isModalOpen, closeModal }) {
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal} title="Leave a comment" outerContainerModifiers="bg-blue" contentModifiers="center">
      <CommentForm closeModal={closeModal} />
    </Modal>
  )
}
