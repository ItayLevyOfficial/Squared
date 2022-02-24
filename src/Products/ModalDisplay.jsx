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
}) => {
  const tokenData = isOpen ? selectedChain?.tokens[selectedTokenIndex] : null
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)
  const [signer, connectWallet, address] = useConnectWallet()
  const isConnected = Boolean(address)

  const ethPool = usePoolContracts(selectedChain.tokens[0], EthPoolAbi)
  const usdcPool = usePoolContracts(selectedChain.tokens[1], PoolAbi)
  const sqrdPool = usePoolContracts(selectedChain.tokens[2], PoolAbi)
  const sqrdLpPool = usePoolContracts(selectedChain.tokens[3], PoolAbi)
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

    switch (selectedTokenIndex) {
      case 0:
        await ethPool.deposit(amount, {
          value: amount,
        })
        break
      case 1:
        await erc20Usdc.approve(
          selectedChain.tokens[1].poolContractAddress,
          amount
        )
        await usdcPool.deposit(amount)
        break
      case 2:
        await erc20Sqrd.approve(
          selectedChain.tokens[2].poolContractAddress,
          amount
        )
        await sqrdPool.deposit(amount)
        break
      default:
        await erc20SqrdLp.approve(
          selectedChain.tokens[3].poolContractAddress,
          amount
        )
        await sqrdLpPool.deposit(amount)
        break
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
