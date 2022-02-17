import Modal from 'react-modal'
import { ModalInfo } from './ModalInfo'
import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { ModalOptions } from './ModalOptions'
import { ModalInput } from './ModalInput'
import { ModalButtons } from './ModalButtons'
import { useContract } from '../launchEvent/useContract'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { EthPoolAbi } from './EthPoolAbi'
import { PoolAbi } from './PoolAbi'
import { selectedChain } from '../launchEvent/chains'
import { BigNumber } from 'ethers'
import { erc20abi } from '../launchEvent/erc20abi'
import React from 'react'
Modal.setAppElement('#root')

export const contentStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: '0.5px solid #ccc',
  background: `black`,
  borderRadius: '10px',
  borderColor: 'white',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',
  width: '600px',
  height: '500px',
}

export const overlayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.70)',
}

export const CloseButton = ({ close }) => (
  <div className="flex justify-end">
    <button onClick={close}>
      <XIcon className="h-6 text-white" />
    </button>
  </div>
)

export const ModalDisplay = ({
  isOpen,
  close,
  selectedTokenIndex,
  tokenAmount,
  setTokenAmount,
}) => {
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)
  const [signer, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)
  const ethPoolContract = useContract(
    signer,
    selectedChain.ethPoolContractAddress,
    EthPoolAbi
  )
  const poolContract = useContract(
    signer,
    selectedChain.poolContractAddress,
    PoolAbi
  )
  const erc20 = useContract(signer, tokenData?.address, erc20abi)
  const tokenData = isOpen ? selectedChain.tokens[selectedTokenIndex] : null

  const commitAssets = async () => {
    const amount = BigNumber.from(tokenAmount).mul(
      BigNumber.from('10').pow(BigNumber.from(tokenData.decimals))
    )
    if (selectedTokenIndex === 0) {
      await ethPoolContract.initialize(
        tokenData.address,
        selectedChain.managerContractAddress,
        tokenData.name,
        tokenData.symbol
      )
      await ethPoolContract.deposit(amount, { value: amount })
    } else {
      await erc20.approve(selectedChain.poolContractAddress, amount)
      await poolContract.initialize(
        tokenData.address,
        selectedChain.managerContractAddress,
        tokenData.name,
        tokenData.symbol
      )
      await poolContract.deposit(amount)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <CloseButton close={close} />
      <h1 className="text-2xl mb-4 -mt-4 text-white flex justify-center">
        {tokenData?.name}
      </h1>

      <div className="border-white border rounded-lg bg-transparent w-full h-96 flex flex-col overflow-hidden">
        <ModalOptions
          isOnWithdraw={isOnWithdraw}
          setIsOnWithdraw={setIsOnWithdraw}
          selectedTokenIndex={tokenData?.name}
        />
        <ModalInput
          selectedTokenIndex={tokenData?.name}
          className="mt-10"
          value={tokenAmount}
          handleChange={setTokenAmount}
        />
        <ModalInfo
          selectedTokenIndex={tokenData?.name}
          isOnWithdraw={isOnWithdraw}
        />
        <br />
        <ModalButtons
          tokenAmount={tokenAmount}
          commitAssets={commitAssets}
          connectWallet={connectWallet}
          isConnected={isConnected}
          isOnWithdraw={isOnWithdraw}
          selectedTokenIndex={tokenData?.name}
        />
        <br />
      </div>
    </Modal>
  )
}
