import React from 'react'
import { Modal } from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { commitContentStyles } from './commitAssetsModal'
import { CloseButton } from '../Products/ModalDisplay'

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
      <CloseButton close={close} />
      <h1 className="text-2xl mb-8 -mt-4 text-white font-medium">
        In the launch event, you can only deposit either {depositedTokenName} or{' '}
        {tokenName}. Since you already committed {depositedTokenName}, further deposits
        of {tokenName} are not allowed. Learn more
      </h1>
    </Modal>
  )
}
