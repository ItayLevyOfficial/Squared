import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../../chains'
import { ModalButton } from '../../products/ModalButton'
import { CloseButton } from '../../Products/ModalDisplay'
import { ModalInput } from '../../Products/ModalInput'
import { useConnectWallet } from '../useConnectWallet'
import { ModalParagraph, ModalTitle } from './MessageModal'
import { StageContext } from '../LaunchEventScreen'
import { contentStyles, overlayStyles } from '../../products/ModalStyles'
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

export const ActionModal = ({
  selectedTokenIndex,
  close,
  handleSubmit,
}) => {
  const isOpen = selectedTokenIndex !== null
  const tokenData = isOpen ? selectedChain.tokens[selectedTokenIndex] : null
  const [tokenAmount, setTokenAmount] = useState('')
  const [, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)
  const launchStage = useContext(StageContext)

  const modalData =
    launchStage === 1
      ? {
          title: 'Commit',
          paragraph: (
            <>
              You will be able to withdraw your assets during the last look
              period.&nbsp;
              <PrimaryLink onClick={() => window.open(mediumArticleLink)}>
                Learn more
              </PrimaryLink>
            </>
          ),
        }
      : {
          title: 'Withdraw',
          paragraph: (
            <>
              The Last Look gives participants the opportunity to withdraw funds
              without making any swap for SQRD if they wish to opt out.&nbsp;
              <PrimaryLink onClick={() => window.open(mediumArticleLink)}>
                Learn more
              </PrimaryLink>
            </>
          ),
        }

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
          {modalData.title}&nbsp;{tokenData?.name}
        </ModalTitle>
        <ModalInput
          selectedToken={tokenData?.name}
          value={tokenAmount}
          handleChange={setTokenAmount}
        />
        <ModalParagraph>{modalData.paragraph}</ModalParagraph>
        <ModalButton
          text={isConnected ? modalData.title : 'Connect Wallet'}
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
