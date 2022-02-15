import React from 'react'
import { Modal } from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { commitContentStyles } from './commitAssetsModal'

export const CommitsNotAllowed = ({
  isOpen,
  tokenName,
  depositedTokenName,
  close,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: commitContentStyles,
      }}
    >
      
    </Modal>
  )
}
