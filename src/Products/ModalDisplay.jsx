import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../chains'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { ModalButtons } from './ModalButtons'
import { ModalInfo } from './ModalInfo'
import { ModalInput } from './ModalInput'
import { ModalOptions } from './ModalOptions'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { parseNumberDecimals } from '../launchEvent/commitAssetsModal/useCommitAssets'
import { useContract } from '../launchEvent/utils'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'
import { usePoolContracts } from './useFetchBalance'
import { contentStyles, overlayStyles } from './ModalStyles'

Modal.setAppElement('#root')

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
  handleSubmit,
}) => {
  const tokenData = isOpen ? selectedChain?.tokens[selectedTokenIndex] : null
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)
  const [, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)

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
          close={close}
          isOnWithdraw={isOnWithdraw}
          selectedTokenName={tokenData?.name}
          isConnected={isConnected}
          connectWallet={connectWallet}
          handleSubmit={handleSubmit}
          selectedTokenIndex={selectedTokenIndex}
          tokenAmount={tokenAmount}
        />
        <br />
      </div>
    </Modal>
  )
}
