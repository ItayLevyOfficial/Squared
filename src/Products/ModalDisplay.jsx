import Modal from 'react-modal'
import { ModalInfo } from './ModalInfo'
import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { ModalOptions } from './ModalOptions'
import { ModalInput } from './ModalInput'
import { ModalButtons } from './ModalButtons'
import { useContract } from '../launchEvent/utils'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { usePoolContracts } from './usePoolContracts'
import { selectedChain } from '../chains'
import { BigNumber } from 'ethers'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import React from 'react'
import { parseNumberDecimals } from '../launchEvent/commitAssetsModal/useCommitAssets'
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
  const [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ] = usePoolContracts()
  const tokenData = isOpen ? selectedChain?.tokens[selectedTokenIndex] : null
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)

  const [signer, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)
  const erc20Usdc = useContract(
    signer,
    selectedChain.tokens[1].address,
    erc20abi
  )
  const erc20Sqrd = useContract(
    signer,
    selectedChain.tokens[2].address,
    erc20abi
  )
  const erc20SqrdLp = useContract(
    signer,
    selectedChain.tokens[3].address,
    erc20abi
  )

  const commitAssets = async () => {
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })
    if (selectedTokenIndex === 0) {
      await ethPoolContract.deposit(amount, { value: amount })
    } else {
      switch (selectedTokenIndex) {
        case 1:
          await erc20Usdc.approve(
            selectedChain.tokens[1].usdcPoolContractAddress,
            amount
          )
          await usdcPoolContract.deposit(amount)
          break
        case 2:
          await erc20Sqrd.approve(
            selectedChain.tokens[2].sqrdPoolContractAddress,
            amount
          )
          await sqrdPoolContract.deposit(amount)
          break
        default:
          await erc20SqrdLp.approve(
            selectedChain.tokens[3].sqrdLpPoolContractAddress,
            amount
          )
          await sqrdLpPoolContract.deposit(amount)
          break
      }
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
      <h1 className="text-2xl mb-4 -mt-4 text-white flex justify-center">
        {tokenData?.name}
      </h1>

      <div className="border-white w-full h-96 flex flex-col overflow-hidden">
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
