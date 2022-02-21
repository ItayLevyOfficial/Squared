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

export const CommitAssetsModal = ({
  selectedTokenIndex,
  close,
  commitAssets,
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
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-8 m text-white font-medium">
          Commit {tokenData?.name}
        </h1>
        <ModalInput
          selectedToken={tokenData?.name}
          className="mb-8"
          value={tokenAmount}
          handleChange={setTokenAmount}
        />
        <p className="w-10/12 text-center mb-8">
          You will be able to withdraw your assets during the last look
          period.&nbsp;
          <PrimaryLink onClick={() => window.open(mediumArticleLink)}>
            Learn more
          </PrimaryLink>
        </p>
        <ModalButton
          text={isConnected ? 'Deposit' : 'Connect Wallet'}
          onClick={
            isConnected
              ? () => commitAssets({ tokenAmount, selectedTokenIndex })
              : connectWallet
          }
        />
      </div>
    </Modal>
  )
}
