import { getListOfPoolBalances } from './useErc20Functions'
import React, { useState } from 'react'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { ModalDisplay } from '../home/ModalDisplay'
import { getListOfUserBalances } from '../home/useErc20Functions'

export const InformationLine = ({ children }) => {
  return (
    <div className="font-number text-lg mb-2 tracking-wider">{children}</div>
  )
}

export const InformationBox = ({ title, children }) => {
  return (
    <div className="w-full h-42 flex flex-col items-start space-y-2">
      <div className="text-4xl font-medium tracking-wide mb-2">{title}</div>
      {children}
    </div>
  )
}

export const InformationWrapper = ({ children }) => {
  return <div className="flex  ">{children}</div>
}

export const HomeScreenBody = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()

  const listOfUserBalances = getListOfUserBalances()

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

  const listOfPoolBalances = getListOfPoolBalances()

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

      <InformationWrapper>
        <InformationBox title={'Your Account Status'}>
          <InformationLine>{`Total Balance: ${listOfPoolBalances[0]} `}</InformationLine>
          <InformationLine>{`Earned Rewards: ${listOfPoolBalances[1]}`}</InformationLine>
          <InformationLine>{`Available Rewards: ${listOfPoolBalances[1]}`}</InformationLine>
          <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
            Claim SQRD
          </button>{' '}
        </InformationBox>
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox title={'Cycle'}>
          <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
          <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
        </InformationBox>
      </InformationWrapper>
    </>
  )
}
