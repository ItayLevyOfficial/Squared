import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import copy from 'copy-to-clipboard'
import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../../chains'
import { CloseButton, overlayStyles } from '../../Products/ModalDisplay'
import errorIcon from '../icons/error.svg'
import { SuccessIcon } from '../icons/success'
import { StageContext } from '../LaunchEventScreen'
import { commitContentStyles, PrimaryLink } from './commitAssetsModal'

export const ModalTitle = ({ children, className }) => (
  <h1 className={`text-2xl font-medium ${className}`}>{children}</h1>
)

export const ModalParagraph = ({ children, className }) => (
  <p className={`text-center w-5/6 text-lg text-white ${className}`}>
    {children}
  </p>
)

export const MessageModal = ({
  icon = <img src={errorIcon} alt="" />,
  header,
  footer = '',
  isOpen,
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
        <ModalTitle className="mt-2 mb-6">{header}</ModalTitle>
        {icon}
        <ModalParagraph className="mt-6">{footer}</ModalParagraph>
      </div>
    </Modal>
  )
}

export const SuccessModal = ({ txHash, close }) => {
  const [txCopied, setTxCopied] = useState(false)

  return (
    <MessageModal
      icon={<SuccessIcon />}
      header="Request Sent Successfully"
      isOpen={Boolean(txHash)}
      close={close}
      footer={
        <>
          Transactions on the {selectedChain.chainName} network are usually
          completed within {selectedChain.approvalTime} minutes. Your
          transaction hash is{'  '}
          <span
            className="font-number bg-dark py-1 px-2 text-sm rounded-lg cursor-pointer"
            onClick={() => {
              copy(txHash)
              setTxCopied(true)
            }}
          >
            {txHash.slice(0, 7)}... &nbsp;
            <FontAwesomeIcon icon={txCopied ? faCheck : faCopy} />
          </span>
          {'  '}
          and you can check its status on{' '}
          <PrimaryLink onClick={() => window.open(selectedChain.scan.url)}>
            {selectedChain.scan.name}
          </PrimaryLink>
          .
        </>
      }
    />
  )
}

export const ErrorModal = ({
  isOpen,
  tokenName,
  depositedTokenName,
  close,
}) => {
  const launchStage = useContext(StageContext)
  return (
    <MessageModal
      header={`${launchStage === 1 ? 'Commit' : 'Withdraw'} not allowed`}
      isOpen={isOpen}
      footer={
        <>
          In the launch event, you can only deposit either {depositedTokenName}{' '}
          or {tokenName}. Since you already committed {depositedTokenName},
          further {launchStage === 1 ? 'deposits' : 'withdrawals'} of{' '}
          {tokenName} are not allowed. <PrimaryLink>Learn more</PrimaryLink>
        </>
      }
      close={close}
    />
  )
}

export const NetworkModal = ({
  icon = <img src={errorIcon} alt="" />,
  isOpen,
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
      <div className="flex flex-col items-center">
        <ModalTitle className="mt-2 mb-10">Wrong Network</ModalTitle>
        {icon}
        <ModalParagraph className="mt-10">
          Please switch to the {selectedChain.chainName} network.
        </ModalParagraph>
      </div>
    </Modal>
  )
}
