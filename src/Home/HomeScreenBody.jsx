import React, { useState } from 'react'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { AccountStatus } from './HomeAccountStatus'
import { StakingPools } from './HomeStakingPools'
import { ModalDisplay } from './ModalDisplay'
import { useUserBalances } from './useErc20Functions'

export const HomeScreenBody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()

  const listOfUserBalances = useUserBalances()

  const openModal = (tokenIndex) => {
    setIsModalOpen(true)
    setSelectedTokenIndex(tokenIndex)
  }

  const close = () => {
    setIsModalOpen(false)
    setSelectedTokenIndex(null)
    setTokenAmount('')
    setTxHash(null)
  }

  return (
    <>
      <NetworkModal close={close} />
      {txHash && <SuccessModal close={close} txHash={txHash} />}
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedTokenIndex={selectedTokenIndex}
        balance={listOfUserBalances[selectedTokenIndex]}
        setTokenAmount={setTokenAmount}
        tokenAmount={tokenAmount}
        handleSubmit={commitAssets}
      />
      <div className="flex space-x-32">
        <AccountStatus className="ml-4" />
        <div className="w-[0.5px] h-[300px] bg-white self-center" />
        <StakingPools openModal={openModal} className="" />
      </div>
    </>
  )
}
