import { BigNumber } from 'ethers'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { ModalButton } from '../Products/ModalButtons'
import {
  CloseButton,
  contentStyles,
  overlayStyles,
} from '../Products/ModalDisplay'
import { ModalInput } from '../Products/ModalInput'
import { selectedChain } from './chains'
import { useConnectWallet } from './useConnectWallet'
import { useContract } from './useContract'
import { erc20abi } from './erc20abi'

const commitContentStyles = {
  ...contentStyles,
  height: '400px',
}

const mediumArticleLink = 'https://medium.com/puffpuffmoney'

export const CommitAssetsModal = ({
  selectedToken,
  close,
  isConnected,
  launchContract,
}) => {
  const isOpen = selectedToken !== null
  const tokenData = isOpen ? selectedChain.tokens[selectedToken] : null
  const [tokenAmount, setTokenAmount] = useState('')
  const [signer, connectWallet, address] = useConnectWallet()
  const erc20 = useContract(signer, selectedChain.tokens[1].address, erc20abi)

  const commitAssets = async () => {
    const amount = BigNumber.from(tokenAmount).mul(
      BigNumber.from('10').pow(BigNumber.from(tokenData.decimals))
    )
    if (selectedToken === 0) {
      await launchContract.deposit(
        {
          token: tokenData.address,
          amount: amount,
        },
        [],
        { value: amount }
      )
    } else {
      await erc20.approve(selectedChain.launchContractAddress, amount)
      await launchContract.deposit(
        {
          token: tokenData.address,
          amount: amount,
        },
        [],
        {}
      )
    }
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
          onClick={isConnected ? commitAssets : connectWallet}
        />
      </div>
    </Modal>
  )
}
