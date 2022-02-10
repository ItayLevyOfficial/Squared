import React, { useState } from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { contentStyles } from '../Products/ModalDisplay'
import { CloseButton } from '../Products/ModalDisplay'
import { StakingPoolsObject } from '../Products/StakingPools'
import { ModalInput } from '../Products/ModalInput'
import { ModalButton } from '../Products/ModalButtons'
import { selectedChain } from './chains'
import { BigNumber } from 'ethers'

const commitContentStyles = {
  ...contentStyles,
  height: '400px',
}

const mediumArticleLink = 'https://medium.com/puffpuffmoney'

export const CommitAssetsModal = ({
  selectedToken,
  close,
  isConnected,
  connectWallet,
  commitAssets,
}) => {
  const isOpen = selectedToken !== null
  const tokenData = isOpen ? selectedChain.tokens[selectedToken] : null
  const [tokenAmount, setTokenAmount] = useState('')

  const handleDepositClick = () => {
    // const amount =
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
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-8 -mt-4 text-white font-medium">
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
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => window.open(mediumArticleLink)}
          >
            Learn more
          </span>
        </p>
        <ModalButton
          text={isConnected ? 'Deposit' : 'Connect Wallet'}
          onClick={() =>
            commitAssets({
              token: tokenData.address,
              amount: BigNumber.from(tokenAmount).mul(BigNumber.from("10").pow(BigNumber.from(tokenData.decimals))),
            })
          }
        />
      </div>
    </Modal>
  )
}
