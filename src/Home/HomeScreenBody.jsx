import React, { useState } from 'react'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { ModalDisplay } from '../home/ModalDisplay'
import { GetListOfUserBalances } from '../home/useErc20Functions'
import { AccountStatus } from './HomeAccountStatus'
import { StakingPools } from './HomeStakingPools'

export const HomeScreenBody = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()

  const listOfUserBalances = GetListOfUserBalances()

  const open = (id) => {
    setIsOpen(true)
    setSelectedTokenIndex(id)
  }

  const close = () => {
    setIsOpen(false)
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
        <StakingPools open={open} className="" />
      </div>
    </>
  )
}
