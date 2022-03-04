import React, { useState } from 'react'
import { selectedChain } from '../chains'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { InformationWrapper } from '../home/Information'
import { ModalDisplay } from '../home/ModalDisplay'
import { StakingPool } from '../home/StakingPool'
import {
  getListOfPoolBalances,
  getListOfUserBalances,
} from '../home/useErc20Functions'
import { Header } from './Header'

export const PageWrapper = ({ children }) => {
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

  const LeftPoolSection = selectedChain.tokens
    .filter((el, index) => index === 2)
    .map((el, index) => (
      <StakingPool
        el={el}
        key={index}
        openModal={() => open(index)}
        balance={listOfPoolBalances[index]}
      />
    ))

  const MiddlePoolSection = selectedChain.tokens
    .filter((el, index) => index <= 1)
    .map((el, index) => (
      <StakingPool
        el={el}
        key={index}
        openModal={() => open(index)}
        balance={listOfPoolBalances[index]}
      />
    ))

  const RightPoolSection = selectedChain.tokens
    .filter((el, index) => index === 3)
    .map((el, index) => (
      <StakingPool
        el={el}
        key={index}
        openModal={() => open(index)}
        balance={listOfPoolBalances[index]}
      />
    ))

  const PoolWrapper = ({ title, children }) => {
    return (
      <div className="flex flex-col w-fit">
        <h1 className="self-center font-baloo text-xl p-2">{title}</h1>
        <div className="h-[0.5px] bg-white mb-4" />
        <div className="flex"> {children}</div>
      </div>
    )
  }

  return (
    <ScreenPaddedContainer>
      <Header connectWallet={connectWallet} address={address} />
      <div className="flex flex-col justify-evenly items-center w-10/12 h-full ">
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

        <div className="w-full flex items-center justify-evenly -mt-32">
          <PoolWrapper title="SQRD Staking Pool">{LeftPoolSection}</PoolWrapper>
          <PoolWrapper title="Launch Pool">{MiddlePoolSection}</PoolWrapper>
          <PoolWrapper title="SQRD LP Pool">{RightPoolSection}</PoolWrapper>
        </div>
        <InformationWrapper>{children}</InformationWrapper>
      </div>
      <Footer />
    </ScreenPaddedContainer>
  )
}
