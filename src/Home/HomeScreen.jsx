import React, { useState } from 'react'
import { selectedChain } from '../chains'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import {
  InformationWrapper,
  InformationBox,
  InformationLine,
} from '../home/Information'
import { ModalDisplay } from '../home/ModalDisplay'
import { StakingPool } from '../home/StakingPool'
import {
  getListOfPoolBalances,
  getListOfUserBalances,
} from '../home/useErc20Functions'
import { Header } from '../layouts/Header'

export const HomeScreen = ({ children }) => {
  const [, connectWallet, address] = useConnectWallet()
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()
  const listOfPoolBalances = getListOfPoolBalances()
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

  return (
    <ScreenPaddedContainer>
      <Header connectWallet={connectWallet} address={address} />
      <div className="flex flex-col justify-evenly items-center w-full h-full ">
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
      </div>
      <Footer />
    </ScreenPaddedContainer>
  )
}
