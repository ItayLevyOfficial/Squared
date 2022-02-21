import React, { useState } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../../chains'
import { ModalButton } from '../../Products/ModalButtons'
import {
  CloseButton,
  contentStyles,
  overlayStyles,
} from '../../Products/ModalDisplay'
import { ModalInput } from '../../Products/ModalInput'
import { useConnectWallet } from '../useConnectWallet'
import { ModalParagraph, ModalTitle } from './MessageModal'

export const commitContentStyles = {
  ...contentStyles,
  height: '400px',
}

const mediumArticleLink = 'https://medium.com/puffpuffmoney'

export const PrimaryLink = ({ children, onClick }) => (
  <span className="text-darkPrimary underline cursor-pointer" onClick={onClick}>
    {children}
  </span>
)

export const CommandModal = ({
  selectedTokenIndex,
  close,
  handleSubmit,
  isWithdraw,
}) => {
  const isOpen = selectedTokenIndex !== null
  const tokenData = isOpen ? selectedChain.tokens[selectedTokenIndex] : null
  const [tokenAmount, setTokenAmount] = useState('')
  const [, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)

  const onClose = () => {
    setTokenAmount('')
    close()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: overlayStyles,
        content: commitContentStyles,
      }}
    >
      <CloseButton close={onClose} />
      <div className="flex flex-col items-center space-y-8">
        <ModalTitle className="mt-2">
          {isWithdraw ? 'Withdraw ' : 'Commit '} {tokenData?.name}
        </ModalTitle>
        <ModalInput
          selectedToken={tokenData?.name}
          value={tokenAmount}
          handleChange={setTokenAmount}
        />
        <ModalParagraph>
          {isWithdraw
            ? 'You are now allowed to withdraw your committed assets.'
            : 'You will be able to withdraw your assets during the last look period. '}
          <PrimaryLink onClick={() => window.open(mediumArticleLink)}>
            Learn more
          </PrimaryLink>
        </ModalParagraph>
        <ModalButton
          text={isConnected ? 'Deposit' : 'Connect Wallet'}
          onClick={
            isConnected
              ? () => handleSubmit({ tokenAmount, selectedTokenIndex })
              : connectWallet
          }
        />
      </div>
    </Modal>
  )
}
