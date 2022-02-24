import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../chains'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { parseNumberDecimals } from '../launchEvent/commitAssetsModal/useCommitAssets'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { ModalButtons } from './ModalButtons'
import { ModalInfo } from './ModalInfo'
import { ModalInput } from './ModalInput'
import { ModalOptions } from './ModalOptions'
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
  <button onClick={close} className="fixed right-5 top-5">
    <XIcon className="h-6 text-white" />
  </button>
)

export const ModalDisplay = ({
  isOpen,
  close,
  selectedTokenIndex,
  tokenAmount,
  setTokenAmount,
}) => {
  const tokenData = isOpen ? selectedChain?.tokens[selectedTokenIndex] : null
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)

  const [signer, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)
  const erc20 = useContract(signer, selectedChain?.tokens[0].address, erc20abi)

  const commitAssets = async () => {
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })

    if (selectedTokenIndex === 0) {
      await poolContractAddress.deposit(amount, { value: amount })
    }
    {
      erc20.approve(
        selectedChain.tokens[selectedTokenIndex].poolContractAddress,
        amount
      )
      await poolContractAddress.deposit(amount)
    }
    close()
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
      <h1 className="text-2xl mb-4 text-white flex justify-center">
        {tokenData?.name}
      </h1>

      <div className="border-white w-full h-96 flex flex-col overflow-hidden">
        <ModalOptions
          isOnWithdraw={isOnWithdraw}
          setIsOnWithdraw={setIsOnWithdraw}
          selectedTokenName={tokenData?.name}
        />
        <ModalInput
          selectedTokenName={tokenData?.name}
          className="mt-10"
          value={tokenAmount}
          handleChange={setTokenAmount}
        />
        <ModalInfo
          selectedTokenName={tokenData?.name}
          selectedTokenIndex={selectedTokenIndex}
          isOnWithdraw={isOnWithdraw}
        />
        <br />
        <ModalButtons
          tokenAmount={tokenAmount}
          commitAssets={commitAssets}
          connectWallet={connectWallet}
          isConnected={isConnected}
          isOnWithdraw={isOnWithdraw}
          selectedTokenName={tokenData?.name}
        />
        <br />
      </div>
    </Modal>
  )
}
