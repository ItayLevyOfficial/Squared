import React from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { contentStyles } from '../Products/ModalDisplay'
import { CloseButton } from '../Products/ModalDisplay'

export const CommitAssetsModal = ({
  tokenName,
  commitedCount,
  isOpen,
  close,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <CloseButton close={close} />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4 -mt-4 text-white">
          Commit {tokenName}
        </h1>
      </div>
    </Modal>
  )
}
