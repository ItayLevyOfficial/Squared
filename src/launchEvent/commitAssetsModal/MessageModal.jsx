import React from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../../Products/ModalDisplay'
import { commitContentStyles } from './commitAssetsModal'
import { CloseButton } from '../../Products/ModalDisplay'
import errorIcon from '../icons/error.svg'
import { PrimaryLink } from './commitAssetsModal'

export const MessageModal = ({
  icon = <img src={errorIcon} alt="" />,
  header = 'Commit not allowed',
  isOpen,
  tokenName,
  depositedTokenName,
  close,
  footer = (
    <>
      In the launch event, you can only deposit either {depositedTokenName} or{' '}
      {tokenName}. Since you already committed {depositedTokenName}, further
      deposits of {tokenName} are not allowed.{' '}
      <PrimaryLink>Learn more</PrimaryLink>
    </>
  ),
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
        <h1 className="text-2xl font-medium mt-2 mb-6">{header}</h1>
        {icon}
        <p className="text-center mt-6 w-5/6 text-lg text-white">{footer}</p>
      </div>
    </Modal>
  )
}
