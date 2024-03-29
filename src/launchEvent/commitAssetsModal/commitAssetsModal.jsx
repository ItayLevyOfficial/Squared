import { useState, useContext } from 'react'
import Modal from 'react-modal'
import { launchEventArticle, selectedChain } from '../../constants'
import { ModalButton } from '../../home/ModalButton'
import { CloseButton } from '../../home/ModalDisplay'
import { ModalInput } from '../../home/ModalInput'
import { useConnectWallet } from '../useConnectWallet'
import { ModalParagraph, ModalTitle } from './MessageModal'
import { StageContext } from '../LaunchEventScreen'
import { contentStyles, overlayStyles } from '../../home/ModalStyles'
export const commitContentStyles = {
  ...contentStyles,
  height: '400px',
}

export const PrimaryLink = ({ children, onClick = () => {} }) => (
  <span className="text-darkPrimary underline cursor-pointer" onClick={onClick}>
    {children}
  </span>
)

export const ActionModal = ({ selectedTokenIndex, close, handleSubmit }) => {
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
              <PrimaryLink onClick={() => window.open(launchEventArticle)}>
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
              <PrimaryLink onClick={() => window.open(launchEventArticle)}>
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
