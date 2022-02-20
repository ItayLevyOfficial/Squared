import React from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../../Products/ModalDisplay'
import { commitContentStyles } from './commitAssetsModal'
import { CloseButton } from '../../Products/ModalDisplay'
import errorIcon from '../icons/error.svg'
import { PurpleLink } from './commitAssetsModal'

export const MessageModal = ({
  icon = <img src={errorIcon} alt="" />,  
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
      <div className="flex flex-col items-center">
        {icon}
        <p className="text-center mt-8 w-5/6 text-lg text-white font-medium">
          In the launch event, you can only deposit either {depositedTokenName}{' '}
          or {tokenName}. Since you already committed {depositedTokenName},
          further deposits of {tokenName} are not allowed.{' '}
          <PurpleLink>Learn more</PurpleLink>
        </p>
      </div>
    </Modal>
  )
}