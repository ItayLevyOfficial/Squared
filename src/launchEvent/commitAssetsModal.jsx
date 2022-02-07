import React from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { contentStyles } from '../Products/ModalDisplay'
import { CloseButton } from '../Products/ModalDisplay'
import { StakingPoolsObject } from '../Products/StakingPools'
import { ModalInput } from '../Products/ModalInput'
import { ModalButton } from '../Products/ModalButtons'

const commitContentStyles = {
  ...contentStyles,
  height: '400px',
}

const mediumArticleLink = 'https://medium.com/puffpuffmoney'

export const CommitAssetsModal = ({ selectedToken, close, isConnected }) => {
  const obj = StakingPoolsObject.find((el) => el.id === selectedToken)

  return (
    <Modal
      isOpen={Boolean(selectedToken)}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: commitContentStyles,
      }}
    >
      <CloseButton close={close} />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-8 -mt-4 text-white font-medium">
          Commit {obj?.title}
        </h1>
        <ModalInput selectedToken={obj?.title} className="mb-8" />
        <p className="w-10/12 text-center mb-8">
          You will be able to withdraw your assets during the last look
          period.&nbsp;
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => window.open(mediumArticleLink)}
          >
            Learn more
          </span>
        </p>
        <ModalButton text={isConnected ? 'Deposit' : 'Connect Wallet'} />
      </div>
    </Modal>
  )
}
